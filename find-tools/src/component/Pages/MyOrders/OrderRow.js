import React from "react";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ data, index, refetch, setCancelOrder }) => {
  const { _id, quantity, productName, status } = data;
  const navigate = useNavigate();

  const handlePay = (id) => {
    navigate(`/payment/${id}`);
  };

  refetch();

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{quantity}</td>
      {status === "paid" ? (
        <>
          <td>
            {" "}
            <small className="bg-green-400 py-1.5 uppercase rounded text-white btn-sm">
              {" "}
              paid
            </small>
          </td>
        </>
      ) : status === "pending" ? (
        <>
          <td>
            {" "}
            <small className="bg-purple-500 py-1.5 uppercase rounded text-white btn-sm">
              {" "}
              pending
            </small>
          </td>
        </>
      ) : status === "shipping" ? (
        <>
          <td>
            {" "}
            <small className="bg-orange-400 py-1.5 uppercase rounded text-white btn-sm">
              {" "}
              shipping
            </small>
          </td>
        </>
      ) : status === "complete" ? (
        <>
          <td>
            {" "}
            <small className="bg-green-500 py-1.5 uppercase rounded text-white btn-sm">
              {" "}
              Complete
            </small>
          </td>
        </>
      ) : (
        <>
          <td>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handlePay(_id)}
            >
              Pay
            </button>
          </td>
        </>
      )}
      {status !== "paid" ? (
        <>
          <td>
            <label
              htmlFor="delete-confirm-modal"
              className="btn btn-primary btn-sm"
              onClick={() => setCancelOrder(data)}
            >
              Cancel
            </label>
          </td>
        </>
      ) : (
        <>
          <td></td>
        </>
      )}
    </tr>
  );
};

export default OrderRow;
