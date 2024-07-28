import React, { useEffect } from 'react';
import { useMyContext } from '../../context/Context';

const Notification = () => {
    const { setopenMenu } = useMyContext();

    useEffect(() => {
        setopenMenu("Notification");
    }, []);
    return (
        <div>Notification</div>
    );
};

export default Notification;