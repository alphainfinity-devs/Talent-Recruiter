import React from "react";
import Reviews from "./homePageComponents/Reviews";
import HowItWork from "../../globalComponents/HowItWork";
import BrowseJobsBanner from "./homePageComponents/BrowseJobsBanner";
import SearchComponent from "../../globalComponents/SearchComponent";
import Banner from "./homePageComponents/Banner";
import Newsletter from "../../globalComponents/Newsletter";
import Categories from "./homePageComponents/Categories";
import FeatureJobs from "./homePageComponents/FeatureJobs";
import Blogs from "./homePageComponents/Blogs";
import ProfileBanner from "./homePageComponents/ProfileBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SearchComponent />
      <Categories />
      <FeatureJobs />
      <BrowseJobsBanner />
      <HowItWork />
      <ProfileBanner />
      <Blogs />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default HomePage;
