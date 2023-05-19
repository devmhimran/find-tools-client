import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";
import { signOut } from "firebase/auth";
import PageTitle from "../PageTitle/PageTitle";

const MakeAdmin = () => {
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://find-tools-server.vercel.app/users", {
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
      <PageTitle title="Make Admin" />
      <h1>All users</h1>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {[...userData].reverse().map((user, index) => (
              <UserRow
                key={user._id}
                userData={user}
                refetch={refetch}
                index={index}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="z-50">
        <Toaster position="bottom-center" reverseOrder={true} />
      </div>
    </div>
  );
};

export default MakeAdmin;
