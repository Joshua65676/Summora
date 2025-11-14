import { MdClose } from "react-icons/md";
import { useState } from "react";
import { motion, stagger, type Variants } from "motion/react";
import LogoImg from "./LogoImg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/Button";
import { navLists } from "../constants";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants: Variants = {
    open: {
      clipPath: "circle(150% at 90px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(0px at 47rem 0px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 40,
      },
    },
  };

  const navVariants = {
    open: {
      transition: { delayChildren: stagger(0.4, { startDelay: 0.5 }) },
    },
    closed: {
      transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: 10 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="">
      {/* Toggle Button (Right Side) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl cursor-pointer"
      >
        {isOpen ? "" : "☰"}
      </button>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed top-0 right-0 h-screen w-screen bg-MeunBg shadow-lg z-40 flex flex-col justify-start items-center pt-7 overflow-hidden"
      >
        {/* Logo + Close Icon */}
        <div className="w-screen px-4 flex flex-row justify-between items-center mb-20 text-center">
          <LogoImg />

          <Button className="px-[18px] py-[9px] bg-Black border-gradient-vertical">
            <NavLink to="#">
              <span className="text-White">Book Now</span>
            </NavLink>
          </Button>

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer"
          >
            <MdClose />
          </button>
        </div>

        {/* Menu List */}
        <motion.ul
          variants={navVariants}
          className="flex flex-col gap-6 items-center justify-center text-center"
        >
          {navLists.map((item, i) => (
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              className="flex items-center gap-3 text-lg cursor-pointer"
            >
              <Button className="px-[18px] py-[9px] bg-Black border-gradient-vertical">
                <Link to={item.path}>
                  <span className="font-sf text-[18.14px] leading-[150%] tracking-[0%] font-[400px] text-WhiteText hover:text-White">{item.name}</span>
                </Link>
              </Button>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
