import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';

const Delivery = () => {
    return (
        <div className='container mx-auto my-5 lg:my-10'>
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 md:grid-cols-2">
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><BsTruck></BsTruck></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>Extra fast deliver</h1>
                    </div>
                </div>
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><BiSupport></BiSupport></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>24/7 Support</h1>
                    </div>
                </div>
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><IoIosTimer></IoIosTimer></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>Opening Hours</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;