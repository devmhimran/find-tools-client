import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {
    // const [products, setProducts] = useState([]);
    const { data: orders, isLoading, refetch } = useQuery('manageAllOrders', () =>
        fetch("http://localhost:5000/allOrders",
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        ).then(res => {
            return res.json()
        })
    );
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container'>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(data => <AllOrderRow key={data._id} data={data} refetch={refetch}></AllOrderRow>)
                }
                
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;