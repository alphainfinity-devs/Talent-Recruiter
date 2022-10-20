import React from "react";
import About from "./aboutPageComponents/About";
import TeamMembers from "./aboutPageComponents/TeamMembers";
import HowItWork from "../../globalComponents/HowItWork";
import Blogs from "../homePage/homePageComponents/Blogs";
import ReviewMain from "../homePage/homePageComponents/ReviewMain";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";

const AboutPage = () => {
  return (
    <>
      <PageTitleBanner title="About Us" />
      <About />
      <TeamMembers />
      <HowItWork />
      <Blogs />
      <ReviewMain />
    </>
  );
};

export default AboutPage;
