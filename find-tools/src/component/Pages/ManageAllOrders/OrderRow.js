import React from 'react';

const OrderRow = ({ data }) => {
    return (
        <tr>
            <th>{1}</th>
            <td>{data.productName}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
    );
};

export default OrderRow;