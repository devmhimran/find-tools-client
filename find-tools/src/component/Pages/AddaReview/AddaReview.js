import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const AddaReview = () => {
    const [user] = useAuthState(auth);
    const { displayName, email, photoURL } = user;
    const { data: userOrder, isLoading, refetch } = useQuery('myOrders', () =>
        fetch(`https://find-tools-server.vercel.app/orders?email=${email}`,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        ).then(res => {
            return res.json()
        })
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const review = {
            name: name,
            photo: photoURL,
            email: email,
            rating: rating,
            description: description
        }
        fetch('https://find-tools-server.vercel.app/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.insertedId) {
                            console.log(data)
                            // toast.success('Successfully toasted!');
                        }
                    })
           
        toast.success('Successfully Review Added!')
        e.target.reset();
        console.log(review);
    }

    return (
        <div className='container'>
            <div className="card w-full md:w-3/4 lg:w-2/4 lg:m-0 md:mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleReview}>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Name</p>
                            <input type="text" name='name' defaultValue={displayName} placeholder="Type here" className="input input-bordered w-full " disabled required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Email</p>
                            <input type="text" name='email' defaultValue={email} placeholder="Type here" className="input input-bordered w-full " disabled required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Rating</p>
                            <select name='rating' className="select select-bordered w-full">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Description</p>
                            <textarea name='description' className="textarea textarea-bordered w-full h-28" placeholder="Description"></textarea>
                        </div>
                        <div className="inputForm my-3">
                            <button type='submit' className="btn btn-primary" disabled={userOrder.length === 0}>Add Rating</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddaReview;