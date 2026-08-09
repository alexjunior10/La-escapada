"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <div className="w-full max-w-md mx-auto mb-8 relative z-20">
      {/* Track */}
      <div className="h-2 w-full bg-accent/20 rounded-full overflow-hidden shadow-inner">
        {/* Fill */}
        <motion.div
          className="h-full bg-primary rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Shine effect on the bar */}
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        </motion.div>
      </div>
      
      {/* Steps indicators (Optional, cute detail) */}
      <div className="flex justify-between mt-2 px-1">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              index < currentStep ? "bg-primary" : "bg-accent/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
