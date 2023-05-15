import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import AllOrderRow from "./AllOrderRow";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const ManageAllOrders = () => {
  // const [products, setProducts] = useState([]);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("manageAllOrders", () =>
    fetch("https://find-tools-server.vercel.app/allOrders", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );

  //   const orderStatus = (status) => {
  //     console.log(status);
  //     fetch(`https://find-tools-server.vercel.app/order-status/${_id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //       body: JSON.stringify(status),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         //   setSpinner(false);
  //         console.log(data);
  //       });
  //   };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[...orders]?.reverse().map((data, index) => (
              <AllOrderRow
                key={data._id}
                data={data}
                index={index}
                refetch={refetch}
                // orderStatus={orderStatus}
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
