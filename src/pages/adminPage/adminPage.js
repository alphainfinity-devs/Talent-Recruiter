import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./adminPageComponents/Sidebar";
// import Dashboard from "./adminSubPages/Dashboard";

const AdminPage = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <>
      <Sidebar />
      <Outlet />
      <div>
        {location === "/about" && <h2 className="text-center">hey there are many people lol</h2>}
      </div>
    </>
  );
};

export default AdminPage;
