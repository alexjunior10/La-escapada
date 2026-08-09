"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { messages } from "@/data/messages";

export function AnalyzingTransition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl"
    >
      <div className="flex flex-col items-center">
        {/* Un gatito tierno escaneando o analizando */}
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
          className="text-6xl mb-6"
        >
          🐱‍💻
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {messages.screen6.title}
        </motion.h2>
        
        <div className="w-48 h-2 bg-accent/20 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: siteConfig.theme.transitionDuration / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
