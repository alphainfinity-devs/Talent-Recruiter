import React from 'react';
import HomePageComponents from './homePageComponents/HomePageComponents';
import HowItWork from "./homePageComponents/HowItWork";
import SeeAllJobs from "./homePageComponents/SeeAllJobs";
import Navbar from "../../utils/Navbar";
import SearchComponent from "../../utils/SearchComponent";
import Banner from "./homePageComponents/Banner";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchComponent />
       <SeeAllJobs />
      <HowItWork />
      <HomePageComponents />
    </div>

  );
};

export default HomePage;
