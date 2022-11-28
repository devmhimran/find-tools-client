import React from 'react';
import { Link } from 'react-router-dom';
import offerImage from '../../../Assets/find-tools-cycle-mage-06.jpg'

const Offer = () => {
    return (
        <div>
            <div className="hero h-5/6 py-14 lg:py-8 px-4 lg:px-28 my-10 rounded-xl">
                <div className="hero-content flex-col gap-6 lg:flex-row-reverse">

                    <div>
                        <h1 className="text-2xl lg:text-5xl font-bold text-black capitalize mb-3 lg:mb-6 lg:text-left text-center">We provide great deal with <br /> great offer Grab now
                        </h1>
                        <div className="offer__btn text-center lg:text-left">
                            <Link to='/allproducts' className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                    <img src={offerImage} className="max-w-sm rounded-lg shadow-2xl  w-full mx-auto" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Offer;