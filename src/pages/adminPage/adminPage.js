import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./adminPageComponents/AdminSidebar";
import AdminDashboard from "./adminSubPages/AdminDashboard";

const AdminPage = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="flex">
        <AdminSidebar />
        <div className="w-full">
          <Outlet />
          {(location === "/about" || location === "/about/") && <AdminDashboard />}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
