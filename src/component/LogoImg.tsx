import React from "react";
import { Logo } from "../assets";

const LogoImg: React.FC = () => {
  return (
    <main className="flex flex-row items-center text-center gap-1">
      <img src={Logo} alt="Logo" />
      <span className="font-sansita text-[32px] tracking-[0%] leading-[150%] font-[400px] pt-3">Summora</span>
    </main>
  );
};

export default LogoImg;
