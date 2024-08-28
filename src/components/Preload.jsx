import React from "react";
import { motion } from "framer-motion";

function Preload() {
  return (
    <div>
      <motion.div
        className="w-full h-screen flex items-center justify-center bg-black absolute"
        animate={{
          y: -900,
        }}
        transition={{
          type: "spring",
          delay: 2.5,
        }}
      >
        <img src="/images/NightVibe.png" className="lg:w-[20%] w-[50%]" />
      </motion.div>
    </div>
  );
}

export default Preload;
