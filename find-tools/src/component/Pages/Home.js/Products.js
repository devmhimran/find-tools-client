import React, { useState } from 'react';
import ProductData from '../AllProducts/ProductData';

const Products = () => {
    const [products, setProducts] = useState([]);
    useState(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container mx-auto">
            <div className="product__data py-16 mx-5 lg:mx-10 lg:py-20">
            <h1 className='text-3xl text-center lg:text-5xl font-bold mb-5'>Products</h1>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                
                {
                    products.slice(0,4).map(data => <ProductData key={data._id} products={data}></ProductData>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default Products;