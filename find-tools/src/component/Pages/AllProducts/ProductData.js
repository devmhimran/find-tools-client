import React from 'react';

const ProductData = ({products}) => {
    const {productName, productImage, productDescription, productQuantity, productPrice} = products;
    return (
        // <div className="card drop-shadow-lg rounded-xl">
        //     <div className="card-body">
        //         {productName}
        //         <img src={productImage} alt="" />
        //         {productDescription}
        //         {productQuantity}
        //         {productPrice}
        //     </div>
        // </div>
        <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <img src={productImage} alt="" />
          <h2 className='text-xl font-semibold'>{productName}</h2>
          <p className='text-base my-3'>{productDescription.slice(0, 45)}[...]</p>
          <p className='text-base my-3'>$ {productPrice}</p>
            <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    );
};

export default ProductData;