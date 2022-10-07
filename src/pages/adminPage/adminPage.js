import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./adminPageComponents/Sidebar";
import Dashboard from "./adminSubPages/Dashboard";

const AdminPage = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Outlet />
          {location === "/about" && <Dashboard />}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
