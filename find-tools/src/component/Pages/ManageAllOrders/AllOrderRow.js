import React from 'react';

const AllOrderRow = ({ data, refetch }) => {
    refetch();
    return (
        <tr>
            <th>1</th>
            <td>{data.productName}</td>
            <td>{data.quantity}</td>
            <td><button className='btn btn-primary btn-sm'>Shipping</button></td>
            <td><button className='btn btn-error btn-sm'>Cancel</button></td>
        </tr>
    );
};

export default AllOrderRow;