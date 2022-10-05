import React from "react";
import Navbar from "../../utils/Navbar";
import SearchComponent from "../../utils/SearchComponent";
import Banner from "./homePageComponents/Banner";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchComponent />
    </div>
  );
};

export default HomePage;
