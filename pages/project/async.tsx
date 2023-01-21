import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Logo = () => {
  const [change, setChange] = useState<string>("async");
  return (
    <div className="flex h-[100vh] text-center flex-col justify-center items-center">
      <motion.div
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.6}
        whileTap={{ cursor: "grabbing" }}
        className="border-[15px] border-[#A9FF1C] rounded-2xl px-[100px]"
        onMouseEnter={() => {
          setChange("dsync");
        }}
        onMouseLeave={() => {
          setChange("async");
        }}
      >
        Drag me
        <h1
          className="text-[200px] w-ful text-center title font-Mohave italic"
          title="dsync"
        >
          {change}
        </h1>
      </motion.div>
    </div>
  );
};

export default Logo;
