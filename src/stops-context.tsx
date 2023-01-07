import * as React from 'react'
import {createContext, useState} from "react";
import {Configuration, DefaultApi, StopDto, WaitingPointsPOSTRequest} from "./generated-sources/openapi";

export default interface StopInformation {
    waitingTimes: Array<number>
    lineNumber: number,
    destination: string
}

type StopProviderProps = { children: React.ReactNode }


type StopsContextState = {
    informations: StopInformation[];
    search: (name: number[]) => void;
};

const contextDefaultValues: StopsContextState = {
    informations: [],
    search: () => {
    }
};

const StopsContext = createContext<StopsContextState>(contextDefaultValues)

function useStops() {
    const context = React.useContext(StopsContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

const configuration = new Configuration({
    basePath: 'https://transports-function.azurewebsites.net/api/',
});

function StopProvider({children}: StopProviderProps) {

    const [informations, setInformations] = useState<StopInformation[]>(contextDefaultValues.informations);
    const search = (stopIds: number[]) => {
        const stops = stopIds

        const postsApi = new DefaultApi(configuration);
        const request: WaitingPointsPOSTRequest = {requestBody: stops}

        const posts: Promise<Array<StopDto>> = postsApi.waitingPointsPOST(request)
        posts.then((stops) => {
            const stopInformations: StopInformation[] =
                stops.map(value => ({
                    destination: value.destination,
                    waitingTimes: value.waitingTimes,
                    lineNumber: value.lineNumber
                })) as StopInformation[];
            setInformations(stopInformations);
        })
    }

    return (
        <StopsContext.Provider value={{
            informations,
            search
        }}>
            {children}
        </StopsContext.Provider>
    )
}

export {StopProvider, useStops}
