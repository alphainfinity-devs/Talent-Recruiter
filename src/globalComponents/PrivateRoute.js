import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthVerify from "../hooks/useAuthVerify";

const PrivateRoute = ({ children }) => {
  const [authLoading, isAuthUser] = useAuthVerify();
  const location = useLocation();
  if (authLoading) {
    return (
      <div className="d-flex justify-center">
        {/* <Spinner />; */}
        Loading...
      </div>
    );
  }
  if (isAuthUser) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
