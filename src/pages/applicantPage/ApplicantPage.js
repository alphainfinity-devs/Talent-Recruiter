import React from "react";
import { Outlet } from "react-router-dom";
import ApplicantSidebar from "./applicantComponents/ApplicantSidebar";

const ApplicantPage = () => {
  return (
    <div className="drawer drawer-mobile h-fit border-y-1 border-accent">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
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
