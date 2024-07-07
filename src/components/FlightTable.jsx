import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { getStatusClass } from "../utils/statusUtil"
import '../css/flightTable.css'; 

export const FlightTable = ({ flights }) => {
    let navigate = useNavigate();
    const navigateToDetail = (flightId) => {
        navigate(`/flights/${flightId}`);
    };

    return (
        <div id="flight-table-container">
            <h4>Flight Status Board</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Airline</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id} onClick={() => navigateToDetail(flight.id)}>
                            <td>{flight.flightNumber}</td>
                            <td>{flight.airline}</td>
                            <td>{flight.origin}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.departureTime}</td>
                            <td className={getStatusClass(flight.status)}>{flight.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}