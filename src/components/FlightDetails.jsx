import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import FlightService from '../services/FlightService';
import { Loader } from './Loader';
import { Error } from './Error';
import { Detail } from './Detail';
import '../css/flightDetail.css';

const FlightDetail = () => {
    const [flight, setFlight] = useState(null);
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const routeParams = useParams();
    const flightId = routeParams.id;
    useEffect(() => {
        const fetchFlightDetail = async () => {
            try {
                const data = await FlightService.getFlightById(flightId);
                setFlight(data);
                setError(null);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchFlightDetail();
    }, [flightId]);

    return (
        <Fragment>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"> {"<- Back Home"}</a>
                </div>
            </nav>
            {flight && <Detail flightInfo={flight} />}
            {isloading && <Loader />}
            {error && <Error errorMesage={error} />}
        </Fragment>
    );
};

export default FlightDetail;
