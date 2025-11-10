import React, { useState, useEffect } from "react";
import { images } from "../constants";
import { motion, type Transition } from "framer-motion";

const shuffle = (array: typeof images) =>
  [...array].sort(() => Math.random() - 0.5);

const spring: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const Grid: React.FC = () => {
  const [shuffled, setShuffled] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffled(shuffle(images));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="">
      <section className="grid grid-flow-col grid-rows-[repeat(3, _10px)] gap-3 h-[600px]">
        {Array.from({ length: 4 }).map((_, index) => {
          let style = "";
          if (index === 0) style = "row-span-3 w-[380px] h-[625px]";
          else if (index === 1) style = "col-span-2 row-span-2 w-full h-[310px]";

          return (
            <div key={index} className={`${style} relative rounded-[40px] overflow-hidden shadow-lg`}>
              <motion.div
                key={shuffled[index].id}
                layout
                transition={spring}
                className="w-full h-full"
              >
                <img
                  src={shuffled[index].src}
                  alt={shuffled[index].label}
                  className="w-full h-full object-cover rounded-[40px]"
                />
                <div className="absolute bottom-0  bg-Black/50 px-6 py-3 w-full h-15 rounded-b-[40px]">
                  <span className="font-sf font-medium text-[16px] leading-[150%] tracking-[0%] text-White">{shuffled[index].label}</span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>
    </main>

  );
};

export default Grid;