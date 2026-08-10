"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({ children, icon, className = "", ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden group
        px-8 py-4 rounded-full font-semibold text-white
        bg-gradient-to-r from-primary to-secondary
        shadow-[0_0_20px_rgba(168,85,247,0.4)]
        hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]
        transition-shadow duration-300
        flex items-center justify-center gap-3
        ${className}
      `}
      {...props}
    >
      <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-500 ease-in-out skew-x-12" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="flex items-center">{icon}</span>}
      </span>
    </motion.button>
  );
}
