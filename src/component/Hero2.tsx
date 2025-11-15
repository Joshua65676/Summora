import React from "react";
import { motion } from "motion/react";
import { Image1 } from "../assets";

const Hero2: React.FC = () => {
  return (
    <main className="w-full container mx-auto max-w-6xl px-5">
      <section className="xl:flex xl:flex-row flex flex-col-reverse gap-8 xl:justify-between xl:items-center ">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.5 }}
          src={Image1}
          alt="image"
        />

        <div className="flex flex-col gap-3">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="xl:w-[530px] font-sf font-medium xl:text-[43.54px] xs:text-[20px] sm:text-[25px] md:text-[29px] leading-[150%] tracking-[0%] text-White"
          >
            Discover What Sets Us Apart in Event Management Excellence
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            className="xl:w-[540px] font-sf font-[400px] text-[16.33px] leading-[150%] tracking-[0%] text-WhiteText"
          >
            We specialize in creating unforgettable experiences tailored to your
            needs. Our innovative approach ensures every detail is meticulously
            planned and executed.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default Hero2;
