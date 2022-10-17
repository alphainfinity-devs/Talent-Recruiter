import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const useRoleChecking = () => {
  const dispatch = useDispatch();
  const [roleCheckLoading, setRoleCheckLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const localAuth = JSON?.parse(localStorage.getItem("auth"));
    const { token, user } = localAuth || {};
    if (user && token) {
      setUserRole(user.role);
      // console.log("role checking",user.role);
    } else {
      setUserRole("");
    }
    setRoleCheckLoading(false);
}, [dispatch]);

  return [roleCheckLoading, userRole];
};

export default useRoleChecking;
