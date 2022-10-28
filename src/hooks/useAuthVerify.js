import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { login, logout } from "../features/userAuth/userAuthSlice";
import jwt_decode from "jwt-decode";

// This is only for when user try to login
const useAuthVerify = () => {
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuthUser, setIsAuthUser] = useState(false);
  useEffect(() => {
    const localAuth = JSON?.parse(localStorage.getItem("auth"));
    const { token, user } = localAuth || {};
    if (user && token) {
      const { exp } = jwt_decode(token) || {};
      if (Date.now() > exp * 1000) {
        setIsAuthUser(false);
        dispatch(logout());
      }
      setIsAuthUser(true);
      dispatch(login({ user, token }));
    } else {
      setIsAuthUser(false);
    }
    setAuthLoading(false);
    // console.log("useAuthVerify");
  }, [dispatch]);

  return [authLoading, isAuthUser];
};

export default useAuthVerify;
