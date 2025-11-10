import React from "react";
import { Button } from "./ui/Button";
import { Arrow } from "../assets";

const CTA: React.FC = () => {
  return (
    <main className="container mx-auto w-full max-w-6xl">
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h2 className="font-sf font-medium text-[48px] leading-[150%] tracking-[0%] text-White">
            Join Us for an Exciting Event
          </h2>
          <p className="font-sf font-[400px] text-WhiteText text-[18px] leading-[150%] tracting-[0%]">
            Don't miss out on this incredible opportunity!
          </p>
        </div>

        <div>
          <Button className="border rounded-[37px] bg-Black flex gap-2 items-center">
            <span className="text-White">Explore</span>
            <img src={Arrow} alt="arrow" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CTA;
