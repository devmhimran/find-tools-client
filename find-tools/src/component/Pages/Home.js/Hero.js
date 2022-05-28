import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../Assets/find-tools-hero-image.jpg';

const Hero = () => {
    return (
            <div class="hero h-5/6 bg-violet-200 py-14 lg:py-32 px-4 lg:px-28 my-10 rounded-3xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImage} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl lg:text-5xl font-bold">Wanted Buy Accessories or tools for your business?</h1>
                        <p class="py-6">We are here for you a great deal</p>
                        <Link to='/allproducts' class="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
    );
};

export default Hero;