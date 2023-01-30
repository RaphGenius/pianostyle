import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function SmoothScroll({ children }) {
  const location = useLocation();
  console.log("slaut");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return <>{children}</>;
}
export default SmoothScroll;
