import React from "react";
import { Button } from "./ui/Button";
import { review } from "../constants";
import CTA from "./CTA";
import { motion } from "motion/react";

const Customer: React.FC = () => {
  return (
    <main className="mx-auto max-w-6xl container w-full py-20">
      <section className="flex flex-col gap-32">
        <main className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-5">
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="font-sf font-medium text-[48px] leading-[120%] tracking-[-1%] text-White"
            >
              what our customers say
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              className="w-[611px] font-sf font-[400px] text-[18px] leading-[150%] tracking-0 text-WhiteText"
            >
              The true measure of Summora’s impact is found in the voices of
              those who’ve experienced it their stories, their successes, and
              the inspiration they carry forward.
            </motion.p>
            <>
              <Button className="bg-linear-to-b from-linearUp from-0% to-linearDown to-100% border rounded-[37px]">
                <span className="text-[16px] font-sf text-Black font-medium leading-[150%] tracking-[0%]">
                  Book Us Now
                </span>
              </Button>
            </>
          </div>

          <div>
            <motion.ul
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col gap-3"
            >
              {review.map(({ id, name, comment, style }) => (
                <li
                  key={id}
                  className={`${style} bg-WhiteBg border-l-10 border-solid custom-border rounded-[15px] py-[15px] pl-5 pr-[30px] gap-[7px] flex flex-col w-[517px]`}
                >
                  <>
                    <h2 className="font-sf font-medium text-[18px] leading-[150%] tracking-[0%] text-White">
                      {name}
                    </h2>
                    <p className="font-sf font-[400px] text-[18px] leading-[150%] tracking-[0%] text-WhiteText w-[467px]">
                      {comment}
                    </p>
                  </>
                </li>
              ))}
            </motion.ul>
          </div>
        </main>

        <>
          <CTA />
        </>
      </section>
    </main>
  );
};

export default Customer;
