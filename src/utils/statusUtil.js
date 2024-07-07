export const getStatusClass = (status) => {
    switch (status) {
        case 'On Time':
            return 'status-on-time';
        case 'Delayed':
            return 'status-delayed';
        case 'Boarding':
            return 'status-boarding';
        case 'Departed':
            return 'status-departed';
        default:
            return '';
    }
};
