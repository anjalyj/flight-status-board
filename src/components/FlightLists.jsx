import React, { useState, useEffect, Fragment } from 'react';
import FlightService from '../services/FlightService';
import { FlightTable } from './FlightTable';
import { Loader } from './Loader';
import { Error } from './Error';
import { Navbar } from 'react-bootstrap';

const FlightList = () => {
    const [flights, setFlights] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const data = await FlightService.getAllFlights();
                setFlights([...data]);
                setIsError(false);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        };
        fetchFlights();
        const interval = setInterval(fetchFlights, 20000); // Fetch data every 10 seconds
        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <Fragment>
            <Navbar expand="lg" variant="dark" bg="dark">
                <div className="container-fluid">
                    <Navbar.Brand href="/">Flight Status Board</Navbar.Brand>
                </div>
            </Navbar>
            {flights.length > 0 && <FlightTable flights={flights}/>}
            {isloading && <Loader />}
            {isError && <Error />}
        </Fragment>
    );
};

export default FlightList;
