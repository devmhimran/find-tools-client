import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const AddaReview = () => {
    const [user] = useAuthState(auth);
    const {displayName, email} = user;
    return (
        <div className='container'>
            <div className="card w-full md:w-3/4 lg:w-2/4 lg:m-0 md:mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <form>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Name</p>
                            <input type="text" defaultValue={displayName} placeholder="Type here" className="input input-bordered w-full " disabled required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Email</p>
                            <input type="text" defaultValue={email} placeholder="Type here" className="input input-bordered w-full " disabled required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Rating</p>
                            <input type="number" name='rating' placeholder="Rating" className="input input-bordered w-full " required />
                        </div>
                        <div className="inputForm my-3">
                            <p className='mb-2 font-medium'>Description</p>
                            <textarea name='description' className="textarea textarea-bordered w-full h-28" placeholder="Description"></textarea>
                        </div>
                        <div className="inputForm my-3">
                            <div className="btn btn-primary" >Add Rating</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddaReview;