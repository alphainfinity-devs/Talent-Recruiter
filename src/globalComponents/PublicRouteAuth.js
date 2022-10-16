import React from "react";
import { Navigate } from "react-router-dom";
import useAuthVerification from "../hooks/useAuthVerification";

const PublicRouteAuth = ({ children }) => {
  const isLoggedIn = useAuthVerification();
  return !isLoggedIn ? children : <Navigate to={"/inbox"} />;
};

export default PublicRouteAuth;