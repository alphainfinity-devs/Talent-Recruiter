import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../features/userAuth/userAuthSlice";

const useAuthVerify = () => {
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuthUser, setIsAuthUser] = useState(false);
  useEffect(() => {
    const localAuth = JSON?.parse(localStorage.getItem("auth"));
    const { token, user } = localAuth || {};
    if (user && token) {
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
