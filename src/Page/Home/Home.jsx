/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Shared/Navbar";
import HomeSection from "../../Component/HomeSection";
import Hotel from "./Hotel";
import HomeHero from "../../Component/HomeHero";
import HomeFeatureSection from "../../Component/HomeFeatureSection";
import Car from "./Car";

const Home = () => {
  return (
    <div>
        <HomeHero />
       <HomeSection/>
       <Hotel/>
       <Car/>
       <HomeFeatureSection/>
    </div>
  );
};

export default Home;
