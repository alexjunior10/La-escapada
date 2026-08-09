"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  rotation?: number;
  baseOpacity?: number;
  className?: string;
}

export function Floating({ 
  children, 
  delay = 0, 
  duration = 3, 
  yOffset = 15,
  xOffset = 5,
  rotation = 5,
  baseOpacity = 0.8,
  className = ""
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0, -xOffset, 0],
        rotate: [-rotation, rotation, -rotation],
        opacity: [baseOpacity, baseOpacity * 0.7, baseOpacity],
        scale: 1,
      }}
      transition={{
        y: {
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        },
        x: {
          duration: duration * 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay + 0.5,
        },
        rotate: {
          duration: duration * 2,
          ease: "linear",
          repeat: Infinity,
          delay: delay,
        },
        opacity: {
          duration: duration * 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        },
        scale: {
          duration: 1.5,
          ease: "easeOut",
          delay: delay,
        }
      }}
    >
      {children}
    </motion.div>
  );
}
