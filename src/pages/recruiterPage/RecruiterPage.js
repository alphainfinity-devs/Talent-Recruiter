import React from "react";
import { Outlet } from "react-router-dom";
import RecruiterSidebar from "./recruiterComponents/RecruiterSidebar";

const RecruiterPage = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-4 py-4">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <RecruiterSidebar />
      </div>
    </div>
  );
};

export default RecruiterPage;
