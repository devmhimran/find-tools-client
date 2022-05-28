import React from 'react';
import { Link } from 'react-router-dom';
import offerImage from '../../../Assets/find-tools-offer-image.jpg'

const Offer = () => {
    return (
        <div>
            <div class="hero h-5/6 bg-violet-500 py-14 lg:py-8 px-4 lg:px-28 my-10 rounded-3xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    
                    <div>
                        <h1 class="text-2xl lg:text-3xl font-bold text-white">We provide greate deal with great offer</h1>
                        <p class="py-4 text-white">Grab now</p>
                        <Link to='/allproducts' class="btn btn-primary">Get Started</Link>
                    </div>
                    <img src={offerImage} class="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Offer;