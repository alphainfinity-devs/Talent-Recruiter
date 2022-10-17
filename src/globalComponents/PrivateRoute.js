import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthVerify from "../hooks/useAuthVerify";

const PrivateRoute = ({ children }) => {
  const [authLoading, isAuthUser] = useAuthVerify();
  const location = useLocation();
  if (authLoading) {
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
  if (!isAuthUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
