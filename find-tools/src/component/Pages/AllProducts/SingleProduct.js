import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const SingleProduct = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [product, setProduct] = useState([]);
    const { _id, productImage, productName, productDescription, productQuantity, productPrice } = product;
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    return (
        <div className='container mx-auto bg-violet-100 my-11 rounded-3xl p-11'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="product__detail__main">
                    <div className="card drop-shadow-xl rounded-3xl p-5 bg-white w-10/12">
                        <div className="card-body">
                            <img className='w-8/12 rounded-lg mx-auto mb-6' src={productImage} alt="" />
                            <h1 className='text-3xl font-bold mb-4'>{productName}</h1>
                            <div className="product_detail">
                                <p className='text-lg leading-9 mb-4'>{productDescription}</p>
                                <p className='text-xl leading-9 font-bold'>Quantity: {productQuantity}</p>
                                <p className='text-xl leading-9 font-bold'>Price: ${productPrice}</p>
                                <p className='text-base text-slate-400 leading-9'>Minimum: Quantity 100Pcs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__detail__main">
                    <div className="product__purchase">
                        <div className="card drop-shadow-xl rounded-3xl p-5 bg-white w-10/12 ml-auto">
                            <div className="card-body">
                            <h1 className='text-3xl font-bold mb-4'>Checkout</h1>
                            <div className="checkout__input my-2">
                                <p className='text-lg font-bold mb-3'>Name</p>
                                <input type="text" defaultValue={user?.displayName} class="input input-bordered input-primary w-full capitalize" disabled/>
                            </div>
                            <div className="checkout__input my-2">
                                <p className='text-lg font-bold mb-3'>Email</p>
                                <input type="text" defaultValue={user?.email} class="input input-bordered input-primary w-full" disabled/>
                            </div>
                            <div className="checkout__input my-2">
                                <p className='text-lg font-bold mb-3'>Address</p>
                                <textarea class="textarea textarea-primary w-full h-28" placeholder="Address"></textarea>
                            </div>
                            <div className="checkout__input my-2">
                                <p className='text-lg font-bold mb-3'>Phone</p>
                                <input type="text"  placeholder="Phone Number" class="input input-bordered input-primary w-full" />
                            </div>
                            <div className="checkout__input my-2">
                                <p className='text-lg font-bold mb-3'>Product Quantity</p>
                                <input type="number"  placeholder="Phone Number" class="input input-bordered input-primary w-full" />
                            </div>
                            <div className="checkout__input my-2">
                                <input class="btn btn-primary" value='Purchase' />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;