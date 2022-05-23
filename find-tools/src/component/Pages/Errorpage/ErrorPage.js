import React from 'react';
import ErrorGif from '../../../Assets/find-tools-ErrorPage.gif'

const ErrorPage = () => {
    return (
        <div className='container mx-auto'>
            <img className=' mx-auto' src={ErrorGif} alt="" />
        </div>
    );
};

export default ErrorPage;