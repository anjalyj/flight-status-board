import { Table } from 'react-bootstrap';
import { getStatusClass } from "../utils/statusUtil";

export const Detail = ({ flightInfo }) => {
    return (
        <div id="flight-detail-container">
            <h4 id="flight-detail-head">Flight Details of {flightInfo.flightNumber}</h4>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td className="flight-detail-title">Airline</td>
                        <td>{flightInfo.airline}</td>
                    </tr>
                    <tr>
                        <td className="flight-detail-title">Origin</td>
                        <td>{flightInfo.origin}</td>
                    </tr>
                    <tr>
                        <td className="flight-detail-title">Destination</td>
                        <td>{flightInfo.destination}</td>
                    </tr>
                    <tr>
                        <td className="flight-detail-title">Departure Time</td>
                        <td>{flightInfo.departureTime}</td>
                    </tr>
                    <tr>
                        <td className="flight-detail-title">Flight Number</td>
                        <td>{flightInfo.flightNumber}</td>
                    </tr>
                    <tr>
                        <td className="flight-detail-title">Status</td>
                        <td className={getStatusClass(flightInfo.status)}>{flightInfo.status}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}