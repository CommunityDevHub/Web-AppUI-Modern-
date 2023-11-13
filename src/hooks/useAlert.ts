import { useState } from "react";

interface Alert {
    show: boolean;
    text: string;
    type: string;
};

const useAlert = () => {
    const [alert, setAlert] = useState<Alert>({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type = 'danger' }: { text: string; type?: string }) =>
        setAlert({ show: true, text, type });
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    return { alert, showAlert, hideAlert };
};

export default useAlert;