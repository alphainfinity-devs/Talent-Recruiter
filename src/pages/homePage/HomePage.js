import React from "react";
import HomePageBlogSection from "./homePageComponents/HomePageBlogSection";
import HomePageReviewSection from "./homePageComponents/HomePageReviewSection";
import HowItWork from "./homePageComponents/HowItWork";
import SeeAllJobs from "./homePageComponents/SeeAllJobs";
import SearchComponent from "./homePageComponents/SearchComponent";
import Banner from "./homePageComponents/Banner";
import Newsletter from "./homePageComponents/Newsletter";
import Categories from "./homePageComponents/Categories";
import FeatureJobs from "./homePageComponents/FeatureJobs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SearchComponent />
      <Categories />
      <FeatureJobs />
      <SeeAllJobs />
      <HowItWork />
      <HomePageBlogSection />
      <HomePageReviewSection />
      <Newsletter />
    </>
  );
};

export default HomePage;
