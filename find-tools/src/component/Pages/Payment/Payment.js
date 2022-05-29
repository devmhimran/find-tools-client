import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Loading from '../Loading/Loading';

const Payment = () => {
    const { orderId } = useParams();
    const stripePromise = loadStripe('pk_test_51L4kRpEVFVIGLa64awGGlTdmhNnTHNw4ZRfcCd4UImjCzb5fHPNtsnQcfvoi5DVlvF6kpxJ1nW7RkV4ubIkEUcCn00NGgUYtHX');
    const url = `http://localhost:5000/order/${orderId}`;
    const { data: order, isLoading } = useQuery(['singleOrder', orderId], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto m-10'>
            {/* <h1 className='text-3xl font-semibold'>Checkut</h1> */}
            <div className="payment__detail bg-slate-200 rounded-lg  p-28 my-3">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="order-detail">
                        <h1 className='text-3xl font-semibold capitalize my-3'>Hello, {order.name}</h1>
                        <h1 className='text-3xl font-semibold my-3'>Pay For: {order.productName}</h1>
                        <p className='text-xl font-semibold my-3'>Product quantity: {order.quantity}</p>
                        <p className='text-xl font-semibold my-3'>Total: ${order.quantity * order.productPrice}</p>
                    </div>
                    <div className="card bg-white border">
                        <div className="card-body">
                            <Elements stripe={stripePromise}> 
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;