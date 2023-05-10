import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const SingleProduct = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const {
    _id,
    productImage,
    productName,
    productDescription,
    productQuantity,
    productPrice,
    productMinimumQuantity,
  } = product;
  const [disable, setDisable] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://find-tools-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  const minimumQuantity = parseInt(productMinimumQuantity);
  const totalQuantity = parseInt(productQuantity);
  let disabledButton = false;
  const handlePurchase = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const number = e.target.number.value;
    const quantity = e.target.quantity.value;
    const status = "unpaid";

    const quantityParse = parseInt(quantity);

    console.log(quantityParse, minimumQuantity, totalQuantity);

    if (quantity <= 0) {
      alert("Enter Some quantity");
    } else if (quantityParse < minimumQuantity) {
      setDisable(true);
    } else if (quantityParse > totalQuantity) {
      setDisable(true);
    } else {
      setDisable(true);
      const isProceed = window.confirm("Are you wanted to place order?");
      if (isProceed) {
        const order = {
          productId: _id,
          name: name,
          email: email,
          address: address,
          number: number,
          quantity: quantity,
          productName: productName,
          productPrice: productPrice,
          status: status,
        };
        fetch(`https://find-tools-server.vercel.app/order`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {});

        const updatedQuantity = productQuantity - quantityParse;
        const totalUpdatedQuantity = { productQuantity: updatedQuantity };
        fetch(`https://find-tools-server.vercel.app/product/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(totalUpdatedQuantity),
        })
          .then((res) => res.json())
          .then((data) => {
            if (isProceed) {
              window.location.reload();
            }
            console.log(data);
          });

        e.target.reset();
        toast.success("Thank you for purchased");
      }
    }
  };
  return (
    <div className="container mx-auto bg-violet-100 my-11 rounded-3xl p-1 lg:p-11">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="product__detail__main">
          <div className="card drop-shadow-xl rounded-3xl p-5 bg-white w-full mb-3 lg:mb-0 lg:w-10/12">
            <div className="card-body">
              <img
                className="w-8/12 rounded-lg mx-auto mb-6"
                src={productImage}
                alt=""
              />
              <h1 className="text-3xl font-bold mb-4">{productName}</h1>
              <div className="product_detail">
                <p className="text-lg leading-9 mb-4">{productDescription}</p>
                <p className="text-xl leading-9 font-bold">
                  Quantity: {productQuantity}
                </p>
                <p className="text-xl leading-9 font-bold">
                  Price: ${productPrice}
                </p>
                <p className="text-base text-slate-400 leading-9">
                  Minimum: Quantity {productMinimumQuantity}Pcs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product__detail__main">
          <div className="product__purchase">
            <div className="card drop-shadow-xl rounded-3xl p-5 bg-white w-full lg:w-10/12 ml-auto">
              <div className="card-body">
                <h1 className="text-3xl font-bold mb-4">Purchase</h1>
                <form onSubmit={handlePurchase}>
                  <div className="checkout__input my-2">
                    <p className="text-lg font-bold mb-3">Name</p>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      className="input input-bordered input-primary w-full capitalize"
                      disabled
                    />
                  </div>
                  <div className="checkout__input my-2">
                    <p className="text-lg font-bold mb-3">Email</p>
                    <input
                      type="text"
                      name="email"
                      defaultValue={user?.email}
                      className="input input-bordered input-primary w-full"
                      disabled
                    />
                  </div>
                  <div className="checkout__input my-2">
                    <p className="text-lg font-bold mb-3">Address</p>
                    <textarea
                      name="address"
                      className="textarea textarea-primary w-full h-28"
                      placeholder="Address"
                    ></textarea>
                  </div>
                  <div className="checkout__input my-2">
                    <p className="text-lg font-bold mb-3">Phone</p>
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone Number"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>
                  <div className="checkout__input my-2">
                    <p className="text-lg font-bold mb-3">Product Quantity</p>
                    <input
                      type="number"
                      placeholder="Product Quantity"
                      className="input input-bordered input-primary w-full mb-2"
                      name="quantity"
                      min="0"
                      onKeyPress={preventMinus}
                    />
                  </div>
                  <div className="checkout__input my-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Purchase"
                      disabled={disable}
                    />
                    <div>
                      <small className="text-red-500">
                        {disable
                          ? "Please reload the page and enter correct quantity"
                          : ""}
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SingleProduct;
