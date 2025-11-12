import React from "react";
import { motion } from "motion/react";
import Grid from "./Grid";

const About: React.FC = () => {
  return (
    <main className="bg-Brown -mt-15 xl:rounded-b-[5rem]">
      <main className="container w-full mx-auto max-w-6xl py-20 px-5">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-center items-center justify-center">
            <motion.h2 className="font-sf font-medium text-[48px] leading-[120%] tracking-[-1%] text-White">
              See Summora
            </motion.h2>
            <motion.p className="font-sf font-[400px] text-[18px] leading-[150%] tracking-[-1%] text-WhiteText xl:w-[750px]">
              More than just a summit; it’s a stage for transformative ideas,
              powerful connections, and experiences that stay with you long
              after the event ends.
            </motion.p>
          </div>

          <>
           <Grid />
          </>
        </section>
      </main>
    </main>
  );
};

export default About;
