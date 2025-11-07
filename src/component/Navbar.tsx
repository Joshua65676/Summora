import React from "react";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState<boolean>(false);

  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    setStickyClass(windowHeight > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  
  return (
    <nav
      className={`fixed top-0 left-[18.8rem] right-0 z-50  ${
        stickyClass
          ? "bg-GrayBg backdrop-blur-sm border border-slate-300 shadow-md"
          : ""
      }`}
    >
     
    </nav>
  );
};

export default Navbar;
