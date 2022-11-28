import React from 'react';
import { ImCoinDollar } from 'react-icons/im';
import { BsChatRightText } from 'react-icons/bs';
import { BsTools } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';
import summerImage01 from '../../../Assets/find-tools-cycle-mage-04.jpg'
import summerImage02 from '../../../Assets/find-tools-cycle-mage-05.jpg'

const Summery = () => {
    return (
        <div className='container mx-auto py-16'>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
            <div className="summer__left">
                <img className='w-full rounded-lg' src={summerImage01} alt="" />
            </div>
            <div className="summer__right">
                <img className='w-full rounded-lg' src={summerImage02} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Summery;