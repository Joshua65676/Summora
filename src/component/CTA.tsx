import React from "react";
import { Button } from "./ui/Button";
import { Arrow } from "../assets";
import { motion } from "motion/react";

const CTA: React.FC = () => {
  return (
    <main className="container mx-auto w-full max-w-6xl">
      <section className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5 xl:gap-0">
        <div className="flex flex-col">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="font-sf font-medium text-[35px] xl:text-[48px] leading-[150%] tracking-[0%] text-White"
          >
            Join Us for an Exciting Event
          </motion.h2>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="font-sf font-[400px] text-WhiteText text-[18px] leading-[150%] tracting-[0%]"
          >
            Don't miss out on this incredible opportunity!
          </motion.p>
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
