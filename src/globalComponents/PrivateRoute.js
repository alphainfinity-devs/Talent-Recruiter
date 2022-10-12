import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../utils/Spinner";
import toast from "react-toastify";

const AuthRequired = ({ children }) => {
  const [user, loading, error] = useAuthState("auth");
  const location = useLocation();
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner />;
      </div>
    );
  }
  if (error) {
    toast.error(`error occurred ${error}`);
  }
  if (!user) {
    return <Navigate to="/getStart" state={{ from: location }} replace />;
  }


  return children;
};

export default AuthRequired;