import React from "react";
import { BsSearch } from "react-icons/bs";
import searchImage from "../../../assets/images/search.png";
const SeeAllJobs = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center scroll-py-56">
        <div>
          <h1 className="text-3xl text-center font-bold my-6">
            <span className="text-primary">7,000+</span>
            Browse Jobs
          </h1>
          <p className="my-16">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>

          <button className="my-5 mx-auto flex btn btn-accent rounded-full text-xl">
            <BsSearch className="mr-2" />
            SEARCH JOBS
          </button>
        </div>

        <div>
          <img src={searchImage} alt="search people" />
        </div>
      </div>
    </>
  );
};

export default SeeAllJobs;
