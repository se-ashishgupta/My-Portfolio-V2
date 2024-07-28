import React, { useEffect } from 'react';
import Topbar from '../../components/layouts/Topbar';
import { useMyContext } from '../../context/Context';

const Clients = () => {
    const { openMenu, setopenMenu } = useMyContext();

    useEffect(() => {
        setopenMenu("Clients");
    }, [openMenu]);

    return (
        <div>Clients</div>
    );
};

export default Clients;