"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { messages } from "@/data/messages";

interface Screen6ResultsProps {
  onNext: () => void;
}

export function Screen6Results({ onNext }: Screen6ResultsProps) {
  useEffect(() => {
    // Avanzar automáticamente después del tiempo de transición + un extra para la animación
    const timer = setTimeout(() => {
      onNext();
    }, siteConfig.theme.transitionDuration * 2.5); // 2.5 segundos de análisis para crear emoción
    
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full h-full relative z-20 py-20"
    >
      <div className="flex flex-col items-center bg-cards/60 backdrop-blur-xl p-12 rounded-[3rem] border border-white/30 shadow-2xl">
        {/* Gatito tierno analizando */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="text-7xl mb-8 filter drop-shadow-md"
        >
          🐱‍💻
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {messages.screen6.title}
        </motion.h2>

        <motion.p
          className="text-foreground/70 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {messages.screen6.subtitle}
        </motion.p>
        
        <div className="w-64 h-3 bg-accent/20 rounded-full overflow-hidden relative shadow-inner">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: (siteConfig.theme.transitionDuration * 2) / 1000, ease: "linear" }}
          >
            {/* Shine effect */}
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
