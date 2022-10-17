import React from "react";
import useRoleChecking from "../hooks/useRoleChecking";

const RecruiterRouteProtect = ({ children }) => {
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
  console.log("hello recruiter",userRole);
  if (userRole ==="recruiter") {
    return children;
  }
};

export default RecruiterRouteProtect;
