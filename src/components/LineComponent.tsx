import * as React from "react";
import StopInformation from "../stops-context";
export default class Line extends React.Component<StopInformation, {}> {
    render() {
        const {lineNumber, destination, waitingTimes} = this.props
        return (
        <tr>
            <td>{lineNumber}</td>
            <td>{destination}</td>
            <td>{waitingTimes.join(' - ')}</td>
        </tr>
        );
    }
}
