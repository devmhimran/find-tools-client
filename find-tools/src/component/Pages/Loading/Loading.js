import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <RotatingLines width="100" strokeColor="#a991f7" strokeWidth="1"
                animationDuration="2" />
        </div>
    );
};

export default Loading;