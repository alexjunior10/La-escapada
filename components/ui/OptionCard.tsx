"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface OptionCardProps {
  id: string;
  title: string;
  image?: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}

export function OptionCard({ id, title, image, description, selected, onClick, index }: OptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: selected ? 1.05 : 1 // Hacer más grande cuando está seleccionado
      }}
      transition={{ delay: index * 0.1, duration: 0.5, scale: { type: "spring", stiffness: 300, damping: 20 } }}
      onClick={onClick}
      className={`relative w-full text-left overflow-hidden rounded-2xl transition-all duration-300 group
        ${selected 
          ? "border-2 border-primary bg-primary/10 shadow-[0_0_30px_rgba(var(--primary),0.4)] z-10" 
          : "border-2 border-white/20 bg-cards/60 hover:bg-white/40 hover:border-white/40 z-0"
        }
        backdrop-blur-md p-4 flex items-center gap-4`}
    >
      {/* Icon or Image placeholder */}
      <div className={`rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden relative border border-white/30 transition-all duration-500
        ${selected ? "w-20 h-20 shadow-lg shadow-primary/30" : "w-16 h-16 bg-white/20"}
      `}>
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" unoptimized={true} />
        ) : (
          <span className="text-2xl opacity-50">✨</span>
        )}
      </div>

      <div className="flex-1 pr-8">
        <h3 className={`font-semibold text-lg transition-colors ${selected ? "text-primary" : "text-foreground"}`}>
          {title}
        </h3>
        {description && (
          <p className="text-sm text-foreground/70 mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Check indicator */}
      <div className={`absolute right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
        ${selected ? "border-primary bg-primary text-white scale-100" : "border-white/30 scale-90 opacity-50"}
      `}>
        <Check className={`w-4 h-4 transition-transform ${selected ? "scale-100" : "scale-0"}`} strokeWidth={3} />
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.button>
  );
}
