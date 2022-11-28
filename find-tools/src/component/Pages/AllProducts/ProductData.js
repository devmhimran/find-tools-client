import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductData = ({ products }) => {
  const navigate = useNavigate();
  const { _id,productName, productImage, productDescription, productQuantity, productPrice } = products;
  const handleSingleProduct =(id)=>{
    navigate(`/product/${id}`);
  }
  return (
    <div className="card w-full lg:w-72 bg-base-100 border">
      <div className="card-body p-5">
        <img className='w-48 mx-auto' src={productImage} alt="" />
        <h2 className='text-base lg:text-lg font-semibold'>{productName.slice(0, 45)}...</h2>
        <p className='text-base'>{productDescription.slice(0, 45)}...</p>
        <div className='flex justify-between'>
          <p className='text-lg lg:text-2xl mb-2 font-semibold'>${productPrice}</p>
          <p className={`text-lg mb-2 font-semibold text-right ${productQuantity > 0 ? 'text-black-500' : 'text-red-500'}`}>{productQuantity > 0 ? 'Available' : 'Not Available'}</p>
          {/* <p className='text-lg mb-2 font-semibold text-right text-red-500'>{productQuantity > 0 ? '' : }</p> */}
        </div>
        <button onClick={()=>handleSingleProduct(_id)} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductData;