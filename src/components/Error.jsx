import { Alert } from 'react-bootstrap';

export const Error = ({errorMessage}) => {
    return (
        <div className="flight-table-container">
            <Alert variant="danger">
                {errorMessage || "Error fetching flight data. Please try again later."}
            </Alert>
        </div>
    );
}