import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import AllOrderRow from "./AllOrderRow";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";

const ManageAllOrders = () => {
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
      <PageTitle title="Manage All Order" />
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
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
