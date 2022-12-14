import React, { useState } from 'react';
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://find-tools-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((data, index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{data.productName}</td>
                                    <td>{data.productQuantity}</td>
                                    <td>
                                        <button className='btn btn-primary btn-sm mx-2'><FiEdit></FiEdit></button>
                                        <button className='btn btn-primary btn-sm mx-2'><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                        
                                    
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageProducts;