import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../AllProducts/ProductData';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-shelf-92508.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container mx-auto py-8 lg:py-16">
            <div className="product__data py-16 mx-5 lg:mx-10 lg:py-20">
                <h1 className='text-3xl text-center lg:text-5xl font-bold mb-5 lg:mb-12'>Products</h1>
                <div className="grid gap-3 mx-auto grid-cols-2 lg:grid-cols-4 md:grid-cols-2">

                    {
                        products.slice(0, 8).map(data => <ProductData key={data._id} products={data}></ProductData>)
                    }

                </div>
                <div className="all__products text-center mt-6 lg:mt-16">
                    <Link className='link link-primary text-xl font-semibold' to='/allproducts'>See all products</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;