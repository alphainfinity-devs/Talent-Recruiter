import React from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import RecruiterSidebar from "./recruiterComponents/RecruiterSidebar";

const RecruiterPage = () => {
  return (
    <div className="drawer drawer-mobile border-y-2 border-accent">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        <div>
          <h2>Recruiter Dashboard</h2>
          <AiOutlineMenuUnfold size={20} />
        </div>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side h-screen">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <RecruiterSidebar />
      </div>
    </div>
  );
};

export default RecruiterPage;
