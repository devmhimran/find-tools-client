import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderRow = ({data, index, refetch}) => {
    const {name, quantity} = data;
    
    refetch();
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td></td>
            <td>Blue</td>
        </tr>
    );
};

export default OrderRow;