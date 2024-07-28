import React from 'react';
import DataTable from 'react-data-table-component';
import "./Table.css";

const columns = [
    {
        name: 'NAME',
        selector: row => row.name,
    },
    {
        name: 'ASSIGNED',
        selector: row => row.assigned,
    },
    {
        name: 'AMOUNT',
        selector: row => row.amount,
        sortable: true,
    },
    {
        name: 'COMPLETION',
        selector: row => row.completion,
    },

];

const data = [
    {
        id: 1,
        name: 'Beetlejuice',
        assigned: '1988',
        amount: '70,000',
        completion: '85%',
    },
    {
        id: 2,
        name: 'Ghostbusters',
        assigned: '1984',
        amount: '1,00,000',
        completion: '20%',
    },
    {
        id: 3,
        name: 'Ghostbusters',
        assigned: '1984',
        amount: '80,000',
        completion: '55%',
    },
    {
        id: 4,
        name: 'Ghostbusters',
        assigned: '1000',
        amount: '50,000',
        completion: '35%',
    },
];
const Table = () => {


    return (
        <div>
            <DataTable
                title={<h1 className=' text-gray-900 font-bold'>New Loan Requests</h1>}
                columns={columns}
                data={data}
                pagination
                responsive
                className='custom-datatable'

            />


        </div>
    );
};

export default Table;