import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const SingleProduct = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const { _id, productImage, productName, productDescription, productQuantity, productPrice, productMinimumQuantity    } = product;
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    const handlePurchase = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.name.value;
        const address = e.target.address.value;
        const number = e.target.number.value;
        const quantity = e.target.quantity.value;
        const status = 'Not Paid';

        const quantityParse = parseInt(quantity);
        const minimumQuantity = parseInt(productMinimumQuantity);
        const totalQuantity = parseInt(productQuantity);

        console.log(quantityParse,minimumQuantity, totalQuantity )

        if(quantity <= 0){
            alert('Enter Some quantity');

        }else if( quantityParse < minimumQuantity){
            alert('Please enter minimum quantity');

        }
        else if( quantityParse > totalQuantity){
            alert('You crossed quantity limit');
        }
        else{
            const isProceed = window.confirm('Are You Sure Update Data?');
            if(isProceed){
                const order = {
                    productId: _id,
                    name: name,
                    email: email,
                    address: address,
                    number: number,
                    quantity: quantity,
                    status: status
                }
                console.log(order)
            }
            
        }

        
        
    }
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
                                <p className='text-base text-slate-400 leading-9'>Minimum: Quantity {productMinimumQuantity}Pcs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__detail__main">
                    <div className="product__purchase">
                        <div className="card drop-shadow-xl rounded-3xl p-5 bg-white w-10/12 ml-auto">
                            <div className="card-body">
                                <h1 className='text-3xl font-bold mb-4'>Checkout</h1>
                                <form onSubmit={handlePurchase}>
                                    <div className="checkout__input my-2">
                                        <p className='text-lg font-bold mb-3'>Name</p>
                                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered input-primary w-full capitalize" disabled />
                                    </div>
                                    <div className="checkout__input my-2">
                                        <p className='text-lg font-bold mb-3'>Email</p>
                                        <input type="text" name='email' defaultValue={user?.email} className="input input-bordered input-primary w-full" disabled />
                                    </div>
                                    <div className="checkout__input my-2">
                                        <p className='text-lg font-bold mb-3'>Address</p>
                                        <textarea name='address' className="textarea textarea-primary w-full h-28" placeholder="Address"></textarea>
                                    </div>
                                    <div className="checkout__input my-2">
                                        <p className='text-lg font-bold mb-3'>Phone</p>
                                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered input-primary w-full" />
                                    </div>
                                    <div className="checkout__input my-2">
                                        <p className='text-lg font-bold mb-3'>Product Quantity</p>
                                        <input type="number" placeholder="Product Quantity" className="input input-bordered input-primary w-full mb-2"
                                            name="quantity" min="0" onKeyPress={preventMinus}/>
                                    </div>
                                    <div className="checkout__input my-2">
                                        <input type='submit' className="btn btn-primary" value='Purchase' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;