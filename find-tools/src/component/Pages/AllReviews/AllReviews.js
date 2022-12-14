import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import ReviewData from './ReviewData';

const AllReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () =>
        fetch(`https://find-tools-server.vercel.app/reviews`,
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
        ).then(res => {
            return res.json()
        })
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto'>
            <div className="product__review py-16 mx-5 lg:mx-10 lg:py-20">
                <h1 className='text-3xl text-center lg:text-5xl font-bold mb-5'>All Reviews</h1>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                    {
                        reviews.map(reviews => <ReviewData key={reviews._id} reviews={reviews}></ReviewData>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllReviews;