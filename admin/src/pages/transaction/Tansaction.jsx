import React, { useEffect } from 'react';
import { useMyContext } from '../../context/Context';

const Tansaction = () => {
    const { setopenMenu } = useMyContext();

    useEffect(() => {
        setopenMenu("Tansaction");
    }, []);

    return (
        <div>Tansaction</div>
    );
};

export default Tansaction;