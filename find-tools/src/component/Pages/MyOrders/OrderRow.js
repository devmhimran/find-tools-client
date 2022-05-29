import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderRow = ({ data, index, refetch, setCancelOrder }) => {
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
            { status === 'paid' ?  <><td> <small  className='bg-green-400 p-4 rounded text-white'> paid</small></td></>:  <>
            <td><button  className='btn btn-primary' onClick={()=> handlePay( _id)}>Pay</button></td>
            </>}
            {
                status !== 'paid' ?<><td><label htmlFor="delete-confirm-modal" className='btn btn-primary' onClick={()=>setCancelOrder(data)}>Cancel</label></td>
           </> :  <><td></td></>
            }
        </tr>
    );
};

export default OrderRow;