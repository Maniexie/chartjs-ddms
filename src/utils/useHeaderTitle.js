import { useLocation } from "react-router-dom";

const useHeaderTitle = () => {
  const location = useLocation();

  const getHeaderTitle = () => {
    if (location.pathname === "/report") {
      return "Report";
    } else if (location.pathname === "/managementuser") {
      return "Management User";
    } else if (location.pathname === "/dashboard") {
      return "Dashboard";
    }
    return "Dashboard";
  };

  return getHeaderTitle();
};

export default useHeaderTitle;
