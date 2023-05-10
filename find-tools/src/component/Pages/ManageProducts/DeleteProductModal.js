import React, { useState } from "react";
import toast from "react-hot-toast";

const DeleteProductModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    fetch(`http://localhost:5000/delete-products/${deleteProduct._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Successfully Deleted!");
          setDeleteProduct(null);
          refetch();
        }
      });
  };
  return (
    <div className="z-50">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">Are want to delete?</h3>
          <img className="w-20" src={deleteProduct?.productImage} alt="" />
          <p className="py-4">{deleteProduct?.productName}</p>
          <div className="flex gap-2">
            <label
              htmlFor="my-modal-3"
              className="btn btn-error btn-sm"
              onClick={handleCancel}
            >
              Delete
            </label>
            <label htmlFor="my-modal-3" className="btn btn-outline btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
