import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Offer from './Offer';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default Home;