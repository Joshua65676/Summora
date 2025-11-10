import React from "react";
import { service } from "../constants";
import { motion } from "motion/react";

const Service: React.FC = () => {
  return (
    <main className="mx-auto max-w-6xl w-full container py-20">
      <section className="flex flex-col items-center justify-center gap-15">
        <div className="flex flex-col items-center gap-5 justify-center text-center">
          <h2 className="font-sf font-medium text-[48px] leading-[120%] tracking-[-1%] text-White">
            Explore Our Comprehensive Service Offerings
          </h2>
          <p className="w-3xl h-[54px] font-sf font-[400px] text-[18px] leading-[150%] tracking-0 text-WhiteText">
            We provide a range of services tailored to meet your needs. Our
            expert team is dedicated to delivering exceptional results.
          </p>
        </div>

        <>
          <ul className="grid grid-cols-3 gap-8">
            {service.map(({ id, src, head, text }) => (
              <li key={id}>
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                  <motion.img
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5}}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: id * 0.4,
                    }}
                    src={src}
                    alt="images"
                  />
                  <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2}}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: id * 0.8,
                    }}
                    className="font-medium font-aleo text-[36px] leading-[130%] tracking-[-1%] text-White"
                  >
                    {head}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5}}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    className="font-[400px] font-worksans text-[18px] tracking-0 leading-[150%] text-WhiteText"
                  >
                    {text}
                  </motion.p>
                </div>
              </li>
            ))}
          </ul>
        </>
      </section>
    </main>
  );
};

export default Service;
