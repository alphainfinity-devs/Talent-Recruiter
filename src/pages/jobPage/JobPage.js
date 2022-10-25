import React from "react";
import JobList from "./jobPageComponents/JobList";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import Newsletter from "../../globalComponents/Newsletter";
import SearchComponent from "../homePage/homePageComponents/SearchComponent";

const job = () => {
  return (
    <>
      <PageTitleBanner title="Job Listing" />
      <div className="container mx-auto px-5 my-5">
        <SearchComponent />
      </div>
      <JobList />
      <Newsletter />
    </>
  );
};

export default job;
