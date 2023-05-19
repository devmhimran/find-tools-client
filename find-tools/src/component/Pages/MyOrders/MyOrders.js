import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import DeleteConfirmModal from "../Dashboard/DeleteConfirmModal";
import Loading from "../Loading/Loading";
import OrderRow from "./OrderRow";
import { signOut } from "firebase/auth";
import PageTitle from "../PageTitle/PageTitle";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [cancelOrder, setCancelOrder] = useState(null);
  let content;

  const {
    data: userOrder,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(`https://find-tools-server.vercel.app/orders?email=${user.email}`, {
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
    content = <Loading></Loading>;
  } else {
    content = [...userOrder]
      ?.reverse()
      .map((data, index) => (
        <OrderRow
          key={data._id}
          data={data}
          index={index}
          refetch={refetch}
          setCancelOrder={setCancelOrder}
        ></OrderRow>
      ));
  }
  return (
    <div className="container">
      <PageTitle title="My Orders" />
      <div className="overflow-x-auto">
        <table className={`table w-full ${isLoading ? "h-[60vh]" : ""}`}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>

      {cancelOrder && (
        <DeleteConfirmModal
          cancelOrder={cancelOrder}
          setCancelOrder={setCancelOrder}
          refetch={refetch}
        ></DeleteConfirmModal>
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default MyOrders;
