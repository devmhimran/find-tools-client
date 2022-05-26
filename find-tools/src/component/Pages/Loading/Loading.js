import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './Loading.css';

const Loading = () => {
    return (
        <div className='absolute left-1/2 top-1/2 preloader'>
            <RotatingLines width="100" strokeColor="#a991f7" strokeWidth="1"
                animationDuration="2" />
        </div>
    );
};

export default Loading;