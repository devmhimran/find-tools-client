import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderRow = ({ data, index, refetch }) => {
    const { _id, name, quantity, productName, status } = data;
    const {orderId} = useParams();
    // const handlePay = () => {
    //     const payment = {
    //         status: 'paid'
    //     };
    //     console.log(payment)
    //     fetch(`http://localhost:5000/orders/${orderId}`, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json",
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(payment)
    //     }).then(res=> res.json)
    //     .then(data=> console.log(data))
    // }

    refetch();

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            { status === 'paid' ?  '':  <>
            <td><button  className='btn btn-primary'>Pay</button></td>
            </>}
            <td><button className='btn btn-primary'>Cancel</button></td>
        </tr>
    );
};

export default OrderRow;