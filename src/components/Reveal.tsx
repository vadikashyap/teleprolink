import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  height?: string;
  style?: React.CSSProperties;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = "100%",
  delay = 0.2,
  direction = "up",
  height = "auto",
  style = {},
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        ...style,
      }}>
      <motion.div
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
