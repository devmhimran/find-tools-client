import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { ImCoinDollar } from 'react-icons/im';
import { BsChatRightText } from 'react-icons/bs';
import { BsTools } from 'react-icons/bs';

const Summery = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><IoIosPeople></IoIosPeople></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>We served 100+ customer</h1>
                    </div>
                </div>
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><ImCoinDollar></ImCoinDollar></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>120M+ Annual revenue</h1>
                    </div>
                </div>
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><BsChatRightText></BsChatRightText></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>33K+ Reviews</h1>
                    </div>
                </div>
                <div className="card shadow-xl  p-5">
                    <div className="card-body">
                        <span className='text-xl text-center lg:text-6xl mx-auto'><BsTools></BsTools></span>
                        <h1 className='text-xl text-center lg:text-2xl font-bold'>50+ tools</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;