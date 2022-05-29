import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderRow = ({ data, index, refetch }) => {
    const { _id, name, quantity, productName, status } = data;
    const navigate = useNavigate();

    const handlePay = (id)=> {
        navigate(`/payment/${id}`)
    }

    refetch();

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            { status === 'paid' ?  'Paid':  <>
            <td><button  className='btn btn-primary' onClick={()=> handlePay( _id)}>Pay</button></td>
            </>}
            <td><button className='btn btn-primary'>Cancel</button></td>
        </tr>
    );
};

export default OrderRow;