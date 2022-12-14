import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [spinner, setSpinner] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { _id, productPrice, quantity, name, email } = order;
    const price = productPrice * quantity;

    useEffect(() => {
        if (price) {
            fetch('https://find-tools-server.vercel.app/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price })
            }).then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                })
        }
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setCardError(error?.message);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setSpinner(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setSuccess('');
            setSpinner(false);
        } else {
            setCardError('');
            // console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your is completed');
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,

            }
            fetch(`https://find-tools-server.vercel.app/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=> res.json())
            .then(data =>{
                setSpinner(false);
                console.log(data)
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                cardError && <small className='text-red-500 '>{cardError}</small>
            }
            {
                success && 
                <div className='mt-10'>
                    <small className='text-green-500 '>{success}</small>
                    <div>
                    <small className='text-orange-500 text-base font-semibold'>Your transaction id is: {transactionId}</small>
                    </div>
                </div>
            }
            <div>
                <button className='btn btn-primary mt-10' type="submit" disabled={!stripe || !clientSecret}>
                    Order
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;