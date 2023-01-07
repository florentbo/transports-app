import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import * as React from 'react'
import {StopProvider, useStops} from './stops-context'
import ReactDOM from 'react-dom/client'
import Line from "./components/LineComponent";

function StopsDisplay() {
    const {informations} = useStops()
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Line number</th>
                <th scope="col">Destination</th>
                <th scope="col">Waiting times</th>
            </tr>
            </thead>
            <tbody>
            {informations.map((line) => <Line key={line.lineNumber+line.destination} {...line}/>)}
            </tbody>
        </table>
    )
}

function StopsSearch() {
    const {search} = useStops()
    const places = [
        {name: 'Home', stopIds: [8784, 5008]},
        {name: 'Stade', stopIds: [2504, 1205]},
        {name: 'Work', stopIds: [5089]}];
    return (
        <div className="container">
            {places.map((place) => {
                return (
                    <button key={place.name} className="btn btn-outline-secondary me-4" onClick={() => search(place.stopIds)}>
                        {place.name}
                    </button>
                );
            })}
        </div>
    )
}

function App() {
    return (
        <div className="app-container">
            <h3>Waiting points</h3>

            <StopProvider>
                <StopsSearch/>
                <StopsDisplay/>
            </StopProvider>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
