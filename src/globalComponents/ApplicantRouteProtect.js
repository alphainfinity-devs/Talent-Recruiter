import React from "react";
import useRoleChecking from "../hooks/useRoleChecking";

const ApplicantRouteProtect = ({ children }) => {
  const [roleCheckLoading, userRole] = useRoleChecking();
  if (roleCheckLoading) {
    return (
      <div className="d-flex justify-content-center">
        {/* <Spinner />; */}
        Loading...
      </div>
    );
  }
  if (userRole === "applicant") {
    return children;
  }
};

export default ApplicantRouteProtect;
