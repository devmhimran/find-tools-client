import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  if (!user.emailVerified) {
    return (
      <div className="container mx-auto flex items-center text-center h-[60vh]">
        <div className="card w-5/6 md:w-5/6 lg:w-96 w-1/3 border-dashed border-2 border-slate-300 mx-auto">
          <div className="card-body py-5">
            <p>Your email is not verified</p>
            <p>Please verify your email</p>
            <button
              className=" w-52 mx-auto link link-primary"
              onClick={async () => {
                await sendEmailVerification();
                toast.success("Sent Email");
              }}
            >
              Resend
            </button>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
