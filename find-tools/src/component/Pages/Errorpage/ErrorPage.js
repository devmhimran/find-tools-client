import React from "react";
import ErrorGif from "../../../Assets/find-tools-ErrorPage.gif";
import PageTitle from "../PageTitle/PageTitle";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <PageTitle title="404 Not Found" />
      <img className=" mx-auto" src={ErrorGif} alt="" />
    </div>
  );
};

export default ErrorPage;
