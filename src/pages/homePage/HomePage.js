
import React from 'react';
import HomePageComponents from './homePageComponents/HomePageComponents';
import HomePageBlogSection from './homePageComponents/HomePageBlogSection';
import HomePageReviewSection from './homePageComponents/HomePageReviewSection';
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
        <HomePageBlogSection/>
        <HomePageReviewSection/>
    </div>

  );

};

export default HomePage;
