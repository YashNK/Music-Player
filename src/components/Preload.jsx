import React from "react";
import { motion } from "framer-motion";
import "./Preload.css";

function Preload() {
  return (
    <motion.div
      className="preloader_container"
      animate={{
        y: -1500,
      }}
      transition={{
        type: "spring",
        delay: 2.5,
      }}
    >
      <img src="/images/NightVibe.png" className="w-[50%] sm:w-[50%]" />
    </motion.div>
  );
}

export default Preload;
