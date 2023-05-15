import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteProductModal from "./DeleteProductModal";
import { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const ManageProducts = () => {
  //   const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [deleteProduct, setDeleteProduct] = useState(null);
  //   useEffect(() => {
  //     fetch("https://find-tools-server.vercel.app/products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("allProducts", () =>
    fetch(`https://find-tools-server.vercel.app/products`, {
      method: "GET",
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );

  let content;
  if (isLoading) {
    content = <Loading />;
  } else {
    content = products.map((data, index) => (
      <tr key={data._id}>
        <th>{index + 1}</th>
        <th>
          <img
            className="w-9 h-9 object-cover"
            src={data.productImage}
            alt=""
          />
        </th>
        <td>{data.productName}</td>
        <td>{data.productQuantity}</td>
        <td>
          <button className="btn btn-primary btn-sm mx-2">
            <FiEdit
              onClick={() => navigate(`/dashboard/update-product/${data._id}`)}
            ></FiEdit>
          </button>
          <label
            onClick={() => handleDeleteProduct(data)}
            htmlFor="my-modal-3"
            className="btn btn-primary btn-sm mx-2"
          >
            <RiDeleteBin6Line></RiDeleteBin6Line>
          </label>
        </td>
      </tr>
    ));
  }

  const handleDeleteProduct = (data) => {
    setDeleteProduct(data);
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>

      <DeleteProductModal
        setDeleteProduct={setDeleteProduct}
        deleteProduct={deleteProduct}
        refetch={refetch}
      />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default ManageProducts;
