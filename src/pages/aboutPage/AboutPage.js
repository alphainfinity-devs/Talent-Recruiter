import React from "react";
import About from "./aboutPageComponents/About";
import TeamMembers from "./aboutPageComponents/TeamMembers";
import HowItWork from "../../globalComponents/HowItWork";
import Blogs from "../homePage/homePageComponents/Blogs";
import Reviews from "../homePage/homePageComponents/Reviews";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";

const AboutPage = () => {
  return (
    <>
      <PageTitleBanner title="About Us" />
      <About />
      <TeamMembers />
      <HowItWork />
      <Blogs />
      <Reviews />
    </>
  );
};

export default AboutPage;
