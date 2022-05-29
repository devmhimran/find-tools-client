import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../Assets/find-tools-hero-image.jpg';

const Hero = () => {
    return (
            <div className="hero h-5/6 bg-black py-10 lg:py-20 px-4 lg:px-28 my-10 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImage} alt='' className="max-w-sm rounded-lg shadow-2xl w-full mx-auto" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-white">Wanted Buy Accessories or tools for your business?</h1>
                        <p className="py-6 text-slate-400">We are here for you a great deal</p>
                        <Link to='/allproducts' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
    );
};

export default Hero;