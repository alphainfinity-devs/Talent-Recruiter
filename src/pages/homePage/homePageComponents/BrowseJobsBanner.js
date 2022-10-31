import React from "react";
import { BsSearch } from "react-icons/bs";
import searchImage from "../../../assets/images/search.png";
import { Link } from "react-router-dom";

const BrowseJobsBanner = () => {
  return (
    <div className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-16 items-center container mx-auto px-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-accent mb-3 md:mb-5">
            <span className="text-primary">7,000+</span>
            Browse Jobs
          </h1>
          <p className="py-6 text-natural">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
            The right job is out there.
          </p>

          <Link
            to="/jobs"
            className="btn w-[200px] rounded-none duration-700 flex itmes-center px-4 md:px-7 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2"
          >
            <BsSearch className="mr-2" />
            SEARCH JOBS
          </Link>
        </div>

        <div>
          <img src={searchImage} alt="search people" />
        </div>
      </div>
    </div>
  );
};

export default BrowseJobsBanner;
