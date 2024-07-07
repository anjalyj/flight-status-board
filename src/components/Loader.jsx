import { Spinner } from 'react-bootstrap';

export const Loader = () => {
    return (
        <div className="text-center mt-4">
            <Spinner animation="border  m-10" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}