import React from 'react';
import Delivery from './Delivery';
import Footer from './Footer';
import Hero from './Hero';
import Offer from './Offer';
import Products from './Products';
import Review from './Review';
import Summery from './Summery';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <Delivery></Delivery>
            <Products></Products>
            <Summery></Summery>
            <Review></Review>
            <Offer></Offer>
        </div>
    );
};

export default Home;