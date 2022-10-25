import { useNavigate, createSearchParams } from "react-router-dom";
const useNavigateParams = () => {
  const navigate = useNavigate();
  // higher order function
  return (pathname, params) => {
    const path = {
      pathname,
      search: createSearchParams(params).toString(),
    };
    navigate(path);
  };
};
export default useNavigateParams;
