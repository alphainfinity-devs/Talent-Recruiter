import React from "react";
import { Outlet } from "react-router-dom";
import PageTitle from "../../globalComponents/PageTitle";
import ApplicantSidebar from "./applicantComponents/ApplicantSidebar";

const ApplicantPage = () => {
  return (
    <div className="drawer drawer-mobile border-t-2">
      <PageTitle title="Applicant" />
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        {/* mobile sidebar menu open */}
        <div className="flex justify-between items-center py-2 container mx-auto">
          <h2 className="text-[20px] md:text-2xl lg:text-3xl font-bold text-primary">
            Applicant Dashboard
          </h2>
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
        </div>
        {/* mobile sidebar open menu end*/}

        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side h-screen">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* <ApplicantAppliedJob /> */}
        <ApplicantSidebar />
      </div>
    </div>
  );
};

export default ApplicantPage;
