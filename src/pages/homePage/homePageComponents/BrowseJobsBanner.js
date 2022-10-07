import React from "react";
import { BsSearch } from "react-icons/bs";
import searchImage from "../../../assets/images/search.png";
const BrowseJobsBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center scroll-py-56 container mx-auto px-5">
        <div>
          <h1 className="text-3xl text-start font-bold mb-4">
            <span className="text-primary">7,000+</span>
            Browse Jobs
          </h1>
          <p className="py-6 text-natural">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>

          <button className="flex itmes-center px-4 md:px-7 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2">
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

export default BrowseJobsBanner;
