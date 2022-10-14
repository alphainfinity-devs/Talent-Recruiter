import { useJwt } from "react-jwt";
const AuthVerify = (token) => {
    const { decodedToken, isExpired } = useJwt(token);
    console.log(decodedToken)
  if (!isExpired) {
    localStorage.removeItem("auth");
    return false;
  }
  return true;
};
export default AuthVerify;
