import React from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";

const PageTitleBanner = ({ title }) => {
  console.log("s", title);
  return (
    <>
      <PageTitle title={title} />
      <div className="py-8 bg-[#d0ffce]">
        <div className="container mx-auto px-5 text-center md:text-start">
          <h2 className="text-accent text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          <div className="flex gap-2 text-accent text-xl pt-2 justify-center md:justify-start">
            <Link to="/" className="hover:text-primary text-xl">
              Home
            </Link>{" "}
            /<p className="text-primary">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitleBanner;
