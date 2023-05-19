import React from "react";

const AllOrderRow = ({ data, refetch, index }) => {
  const handleStatus = (e) => {
    e.preventDefault();
    const status = e.target.status.value;
    fetch(`https://find-tools-server.vercel.app/order-status/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  refetch();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{data.productName}</td>
      <td>{data.quantity}</td>
      <td>
        <form onSubmit={handleStatus}>
          <select
            className="select select-sm select-bordered mr-1.5"
            name="status"
            required
          >
            <option
              value="pending"
              selected={
                "pending" === data.status
                  ? "selected"
                  : "unpaid" === data.status
                  ? "selected"
                  : ""
              }
            >
              Pending
            </option>
            <option
              value="shipping"
              selected={"shipping" === data.status ? "selected" : ""}
            >
              Shipping
            </option>
            <option
              value="complete"
              selected={"complete" === data.status ? "selected" : ""}
            >
              Complete
            </option>
          </select>
          <button type="submit" className="btn btn-primary btn-sm">
            Update
          </button>
        </form>
      </td>
      <td>
        <button className="btn btn-error btn-sm">Cancel</button>
      </td>
    </tr>
  );
};

export default AllOrderRow;
