"use client"
import React from "react";
import { motion } from "framer-motion";

const wordAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1.5 },
};
const headingAnimation = {
  initial: { opacity: 0 },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const AnimatedText = ({ title, className, ...rest }) => {
  return (
    <div>
      <motion.h1
        variants={headingAnimation}
        initial="initial"
        animate="animate"
        className=" w-full text-[2.5rem] md:text-[100px] font-[800] text-left text-dark capitalize"
      >
        {title.split(" ").map((word, index) => (
          <motion.span
            key={word + " " + index}
            className=" text-dark  inline-block "
            variants={wordAnimation}
            initial="initial"
            animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
