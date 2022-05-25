import React from 'react';

const AddProduct = () => {
    return (
        <div className='container'>
            <h1 className='text-2xl mb-5 lg:mb-10 font-bold'>Add A Product</h1>
            <div className="card bg-white lg:w-6/12">
                <div className="card-body">
                    <form action="">
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Name</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Image</p>
                            <input type="file" placeholder="Type here" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100" />
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Short Description</p>
                            <textarea className="textarea textarea-bordered w-full h-24" placeholder="Short Description"></textarea>
                        </div>
                        <div className='product-input my-5'>
                            <p className='mb-3'>Product Quantity</p>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;