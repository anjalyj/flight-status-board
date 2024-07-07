import axios from 'axios';

const BASE_URL = 'https://flight-status-mock.core.travelopia.cloud';

const FlightService = {
    getAllFlights: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/flights`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getFlightById: async (flightId) => {
        try {
            const response = await axios.get(`${BASE_URL}/flights/${flightId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default FlightService;