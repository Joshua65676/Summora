import React from "react";
import { navLists } from "../constants";
import { Link } from 'react-router-dom';


const MenuList: React.FC = () => {
  return (
    <main className="border-x-[0.45px] rounded-[37px] border-x-gray-700 hidden lg:flex md:flex">
      <div className=" px-[18px] py-[9px] border-gradient-vertical">
        <ul className="flex flex-row items-center text-center gap-5">
          {navLists.map(({ id, name, path }) => (
            <li key={id} className="">
             <Link to={path}>
                <span className="font-sf text-[18.14px] leading-[150%] tracking-[0%] font-[400px] text-WhiteText hover:text-White">{name}</span>
             </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MenuList;
