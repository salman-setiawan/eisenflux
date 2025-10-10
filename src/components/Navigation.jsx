import { useState, useEffect } from "react";
import MobileNavigation from "./MobileNavigation.jsx";
import DesktopNavigation from "./DesktopNavigation.jsx";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </div>
  );
};

export default Navigation;
