import React from 'react';
import { useQuery } from 'react-query';
import ReviewData from '../AllReviews/ReviewData';
import Loading from '../Loading/Loading';

const Review = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () =>
        fetch(`http://localhost:5000/reviews`,
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
                <h1 className='text-3xl text-center lg:text-5xl font-bold mb-5'>Reviews</h1>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">

                    {
                        reviews.slice(0,8).map(reviews => <ReviewData reviews={reviews}></ReviewData>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Review;