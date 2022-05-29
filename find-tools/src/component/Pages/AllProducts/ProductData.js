import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductData = ({ products }) => {
  const navigate = useNavigate();
  const { _id,productName, productImage, productDescription, productQuantity, productPrice } = products;
  const handleSingleProduct =(id)=>{
    navigate(`/product/${id}`);
  }
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <img src={productImage} alt="" />
        <h2 className='text-xl font-semibold'>{productName}</h2>
        <p className='text-base my-3'>{productDescription.slice(0, 45)}[...]</p>
        <div className='flex justify-between'>
          <p className='text-2xl mb-2 font-semibold'>${productPrice}</p>
          <p className='text-lg mb-2 font-semibold text-right'>{productQuantity > 0 ? 'Available' : ''}</p>
          <p className='text-lg mb-2 font-semibold text-right text-red-500'>{productQuantity > 0 ? '' : 'Not Available'}</p>
        </div>
        <button onClick={()=>handleSingleProduct(_id)} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductData;