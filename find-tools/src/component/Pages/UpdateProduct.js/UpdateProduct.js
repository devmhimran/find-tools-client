import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://find-tools-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleUpdateAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.image.files[0];
    const shortDescription = e.target.shortDescription.value;
    const quantity = e.target.quantity.value;
    const minimumQuantity = e.target.minimumQuantity.value;
    const price = e.target.price.value;
    const formData = new FormData();
    formData.append("image", photoURL);
    // const productImage = result.data.image.url;
    const product = {
      productName: name,
      //   productImage: productImage,
      productDescription: shortDescription,
      productQuantity: quantity,
      productMinimumQuantity: minimumQuantity,
      productPrice: price,
    };
    fetch(`http://localhost:5000/update-product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // refetch();
          toast.success("Successfully Updated!");
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-2xl mb-5 lg:mb-10 font-bold">Update Product</h1>
      <div className="card bg-white lg:w-6/12">
        <div className="card-body">
          <form onSubmit={handleUpdateAddProduct}>
            <div className="product-input my-5">
              <p className="mb-3">Product Name</p>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={product.productName}
                required
              />
            </div>

            <div className="product-input my-5">
              <p className="mb-3">Product Image</p>
              <input
                type="file"
                name="image"
                placeholder="Type here"
                className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                // required
              />
            </div>
            <div className="product-input my-5">
              <img
                className="w-28 border rounded-lg"
                src={product.productImage}
                alt=""
              />
            </div>
            <div className="product-input my-5">
              <p className="mb-3">Product Short Description</p>
              <textarea
                name="shortDescription"
                className="textarea textarea-bordered w-full h-24"
                placeholder="Short Description"
                defaultValue={product.productDescription}
                required
              ></textarea>
            </div>
            <div className="product-input my-5">
              <p className="mb-3">Product Quantity</p>
              <input
                type="number"
                name="quantity"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={product.productQuantity}
                required
              />
            </div>
            <div className="product-input my-5">
              <p className="mb-3">Minimum Quantity</p>
              <input
                type="number"
                name="minimumQuantity"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={product.productMinimumQuantity}
                required
              />
            </div>
            <div className="product-input my-5">
              <p className="mb-3">Product Price</p>
              <input
                type="number"
                name="price"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={product.productPrice}
                required
              />
            </div>
            <div className="product-input my-5">
              <input type="submit" className="btn btn-primary" value="Update" />
            </div>
          </form>
        </div>
      </div>
      <div className="z-50">
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
    </div>
  );
};

export default UpdateProduct;
