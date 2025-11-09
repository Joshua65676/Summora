import React from "react";
import { useState, useEffect } from "react";
import LogoImg from "./LogoImg";
import MenuList from "./MenuList";
import { NavLink } from "react-router-dom";

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
      className={`fixed top-0 left-0 right-0 z-50  ${
        stickyClass
          ? "bg-GrayBg backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <main className="container mx-auto max-w-6xl w-full py-6">
        <section className="flex flex-row justify-between items-center text-center">
          <LogoImg />
          <div className="flex flex-row gap-20 items-center ">
            <MenuList />

            <main className="border-x-[0.45px] rounded-[37px] border-x-gray-700">
              <div className="px-[18px] py-[9px] border-gradient-vertical">
                <NavLink to="#">
                  <span className="">Book Now</span>
                </NavLink>
              </div>
            </main>
          </div>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
