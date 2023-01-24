import React from "react";
import { motion } from "framer-motion";

const Krishn = () => {
  return (
    <div className=" bg-[url('/backKrishn.jpg')] bg-cover text-center overflow-hidden h-[100vh] flex justify-center items-center relative">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        className=""
      >
        <motion.div
          className="leaf absolute h-[32px] w-[32px]"
          initial={{
            y: -200,
            x: -50,
            skewX: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: -4,
            x: [0, -50, 10, -70, -25],
            rotate: [-10, 10, -10, 0],
            skewX: [10, -10, 10, 0],
            transition: { duration: 3 },
          }}
        >
          <img src="/feather.png" alt="feather" />
        </motion.div>
        <motion.div className="h-[18px] w-[90px] font-Inter font-bold text-white">
          {"krishn.ai".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: i === 0 ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Krishn;
