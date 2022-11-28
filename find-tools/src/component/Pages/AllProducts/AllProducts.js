import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductData from './ProductData';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-shelf-92508.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container mx-auto">
            <div className="product__data py-16 mx-5 lg:mx-10 lg:py-20">
            <h1 className='text-3xl text-center lg:text-5xl font-bold mb-5 lg:mb-12'>Products</h1>
            <div className="grid w-10/12 mx-auto gap-3 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                {
                    products.map(data => <ProductData key={data._id} products={data}></ProductData>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default AllProducts;