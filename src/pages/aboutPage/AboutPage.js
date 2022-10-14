import React from "react";
import About from "./aboutPageComponents/About";
import TeamMembers from "./aboutPageComponents/TeamMembers";
import HowItWork from "../homePage/homePageComponents/HowItWork";
import Blogs from "../homePage/homePageComponents/Blogs";
import Reviews from "../homePage/homePageComponents/Reviews";

const AboutPage = () => {
  return (
    <div>
      <About />
      <TeamMembers />
      <HowItWork />
      <Blogs />
      <Reviews />
    </div>
  );
};

export default AboutPage;
