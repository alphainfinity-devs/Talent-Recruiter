import React from "react";
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
    </div>

  );
};

export default HomePage;
