import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import DeleteConfirmModal from "../Dashboard/DeleteConfirmModal";
import Loading from "../Loading/Loading";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [cancelOrder, setCancelOrder] = useState(null);
  // const [orders, setOrders] = useState([]);
  // useEffect(()=>{
  //     fetch(`https://find-tools-server.vercel.app/orders?email=${user.email}`)
  //     .then(res=>res.json())
  //     .then(data => setOrders(data))
  // },[]);

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
      return res.json();
    })
  );
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
            {
              [...userOrder].reverse().map((data, index) => (
                <OrderRow
                  key={data._id}
                  data={data}
                  index={index}
                  refetch={refetch}
                  setCancelOrder={setCancelOrder}
                ></OrderRow>
              ))
              // console.log(userOrder)
            }
          </tbody>
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
