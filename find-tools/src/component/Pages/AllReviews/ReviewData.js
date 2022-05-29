import React from 'react';
import { AiFillStar } from 'react-icons/ai';


const ReviewData = ({ reviews }) => {
    const { name, email, photo, rating, description } = reviews;
    return (
        <div className="review__card">
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="rating__header flex justify-between">
                        <div className="profile">
                            <div class="avatar">
                                <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={photo} />
                                </div>
                                <h3 className='text-xl ml-3.5 font-semibold capitalize'>{name}</h3>
                            </div>
                        </div>
                        <div className="rating flex  items-center">
                            <h3>{rating}</h3>
                            <span className='ml-1 text-yellow-400'><AiFillStar></AiFillStar></span>
                        </div>

                    </div>
                    <hr />
                    <div className="rating__description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewData;