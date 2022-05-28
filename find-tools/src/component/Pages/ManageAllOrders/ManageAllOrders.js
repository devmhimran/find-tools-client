import React, { useState } from 'react';
import ProductData from '../AllProducts/ProductData';

const ManageAllOrders = () => {
    const [products, setProducts] = useState([]);
    useState(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container mx-auto">
                {
                    products.map(data => {
                        <tr>
                        <th>{1}</th>
                        <td>{data.productName}</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                      </tr>})
                }
                
            </div>
    );
};

export default ManageAllOrders;