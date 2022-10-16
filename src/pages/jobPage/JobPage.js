import React from "react";
import JobList from "./jobPageComponents/JobList";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import SearchComponent from "../../globalComponents/SearchComponent";
import Newsletter from "../../globalComponents/Newsletter";

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
