import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductData = ({ products }) => {
  const navigate = useNavigate();
  const {
    _id,
    productName,
    productImage,
    productDescription,
    productQuantity,
    productPrice,
  } = products;
  const handleSingleProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card w-full lg:w-full bg-base-100 border">
      <div className="card-body p-5 relative">
        <img className="w-48 mx-auto" src={productImage} alt="" />
        <h2 className="text-sm lg:text-base font-normal capitalize">
          {productName.slice(0, 45)}...
        </h2>
        <div className="flex justify-between mt-2 mb-6">
          <p className="text-lg lg:text-xl mb-2 font-semibold">
            ${productPrice}
          </p>
          <p
            className={`text-lg mb-2 font-semibold text-right ${
              productQuantity > 0 ? "text-black-500" : "text-red-500"
            }`}
          >
            {productQuantity > 0 ? "Available" : "Not Available"}
          </p>
        </div>

        <div className=" absolute bottom-3.5">
          <button
            onClick={() => handleSingleProduct(_id)}
            className="btn btn-primary btn-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
