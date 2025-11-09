import React from "react";
import { Button } from "./ui/Button";
import { Arrow, SummoraImg } from "../assets";
import { motion } from "motion/react";
import Hero2 from "./Hero2";

const Hero: React.FC = () => {
  return (
    <main className="w-full container mx-auto max-w-6xl py-30 px-2 flex flex-col gap-25">
      {/* Hero */}
      <main className="flex flex-row justify-between items-center">
        {/* Section 1 */}
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="font-sf text-[65.31px] leading-[100%] tracking-[-1%] font-[400px] text-WhiteText w-[530px]"
            >
              Elevate your events into{" "}
              <span className="text-White font-medium">
                unforgettable experiences.
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
              className="font-sf font-[400px] text-[16px] leading-[150%] tracking-[0%] text-WhiteText w-[485px] h-24"
            >
              Join us for an extraordinary gathering of industry leaders,
              visionaries, and innovators. Engage in inspiring
              conversationsinsights, expand your network, and immerse yourself
              in an experience designed to elevate every aspect of your
              professional journey.
            </motion.p>
          </div>
          <div className="flex flex-row gap-3">
            <Button className="bg-linear-to-b from-linearUp to-linearDown border rounded-[37px]">
              <span className="text-[16px] font-sf text-Black font-medium leading-[150%] tracking-[0%]">
                See pricing
              </span>
            </Button>
            <Button className="border rounded-[37px] bg-Black flex gap-2 items-center">
              <span className="text-White">Explore</span>
              <img src={Arrow} alt="arrow" />
            </Button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col relative bottom-5">
          <div className="flex items-center justify-center relative top-20">
            <motion.span
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
              className="font-sansita text-[33px] leading-[150%] tracking-[0%] text-SummoraText"
            >
              Summora
            </motion.span>
          </div>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            src={SummoraImg}
            alt="summora"
          />
        </section>
      </main>

      <Hero2 />

    </main>
  );
};

export default Hero;
