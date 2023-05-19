import React from "react";
import Delivery from "./Delivery";
import DemoInfo from "./DemoInfo";
import Footer from "./Footer";
import Hero from "./Hero";
import Offer from "./Offer";
import Products from "./Products";
import Review from "./Review";
import Summery from "./Summery";
import PageTitle from "../PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="container mx-auto w-full lg:w-3/4 ">
      <PageTitle title="Home" />
      <Hero></Hero>
      <DemoInfo />
      <Products></Products>
      <Offer></Offer>
      <Review></Review>
      <Summery></Summery>
    </div>
  );
};

export default Home;
