import React from "react";

const AllOrderRow = ({ data, refetch, index }) => {
  const handleStatus = (e) => {
    e.preventDefault();
    const status = e.target.status.value;
    fetch(`http://localhost:5000/order-status/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        //   setSpinner(false);
        console.log(data);
      });
    // orderStatus(status);
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
            {/* <option {data.status.includes('') ? }>Shipping</option> */}
            <option
              value="pending"
              //   selected={data.status.includes("pending") && "selected"}
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
              //   selected={data.status.includes("shipping") && "selected"}
            >
              Shipping
            </option>
            <option
              value="complete"
              selected={"complete" === data.status ? "selected" : ""}
              //   selected={data.status.includes("shipping") && "selected"}
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
