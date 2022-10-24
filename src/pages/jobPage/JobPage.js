import React from "react";
import JobList from "./jobPageComponents/JobList";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import Newsletter from "../../globalComponents/Newsletter";
import SearchComponent from "../homePage/homePageComponents/SearchComponent";

const job = () => {
  return (
    <>
      <PageTitleBanner title="Job Listing" />
      <SearchComponent />
      <JobList />
      <Newsletter />
    </>
  );
};

export default job;
