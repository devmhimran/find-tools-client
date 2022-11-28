import React from 'react';
import cycleImage from '../../../Assets/find-tools-cycleimage.jpg'
import cycleImage01 from '../../../Assets/find-tools-cycle-mage-01.jpg'
import cycleImage02 from '../../../Assets/find-tools-cycle-mage-02.jpg'
import cycleImage03 from '../../../Assets/find-tools-cycle-mage-03.jpg'

const DemoInfo = () => {
    return (
        <div className='demo__info py-10 lg:py-24 lg:px-0 px-3'>
            <div className="container mx-auto my-5 lg:my-10">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className="demo__info__left flex items-center">
                        <img className='w-full' src={cycleImage} alt="" />
                    </div>
                    <div className="demo__info__right ml-0 lg:ml-10">
                        <h2 className='text-3xl lg:text-6xl font-bold'>Best Adventure Tourer Bikes</h2>
                        <p className='text-lg my-5 lg:my-10'>A Lorem Ipsum passage, and going through the <br />
                         cites of the word in classical literature, discovered <br />
                        the undoubtable sourceand going through.</p>
                        <div className="cycle__images flex justify-between">
                            <img className='w-[32%]' src={cycleImage01} alt="" />
                            <img className='w-[32%]' src={cycleImage02} alt="" />
                            <img className='w-[32%]' src={cycleImage03} alt="" />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default DemoInfo;