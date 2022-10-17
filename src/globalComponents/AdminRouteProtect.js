import React from "react";
import useRoleChecking from "../hooks/useRoleChecking";

const AdminRouteProtect = ({ children }) => {
  const [roleCheckLoading, userRole] = useRoleChecking();
  if (roleCheckLoading) {
    return (
      <div className="d-flex justify-content-center">
        {/* <Spinner />; */}
        Loading...
      </div>
    );
  }
  /*   if (error) {
    toast.error(`error occurred ${error}`);
  } */
  if (userRole ==="admin" || userRole ==="administrator") {
    console.log("hello admin",userRole);
    return children;
  }
};

export default AdminRouteProtect;
