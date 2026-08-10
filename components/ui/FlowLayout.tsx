"use client";

import { ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Floating } from "@/components/animations/Floating";
import { getStickersSlice } from "@/data/stickers";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface FlowLayoutProps {
  children: ReactNode;
  showStickers?: boolean;
  stickersRange?: [number, number]; // [start, end]
  className?: string;
  onBack?: () => void;
}

export function FlowLayout({ 
  children, 
  showStickers = true, 
  stickersRange = [0, 5],
  className = "",
  onBack
}: FlowLayoutProps) {
  
  const stickers = getStickersSlice(stickersRange[0], stickersRange[1]);

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden bg-background px-4 py-8 md:px-8 md:py-12 ${className}`}>
      
      {/* Botón de retroceso global */}
      {onBack && (
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-cards/60 backdrop-blur-md rounded-full shadow-md border border-white/40 text-foreground/70 hover:text-primary hover:scale-105 transition-all focus:outline-none hover:bg-white/40"
            aria-label="Volver atrás"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      )}

      {/* 1. Fondo (Burbujas Glow) */}
      <FadeIn delay={0} duration={1}>
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[5%] left-[10%] w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>
      </FadeIn>

      {/* 2. Stickers flotantes */}
      {showStickers && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {stickers.map((sticker) => (
            <Floating 
              key={sticker.id}
              className={`absolute ${sticker.positionClass}`}
              delay={sticker.delay} 
              duration={sticker.duration} 
              yOffset={sticker.yOffset}
              xOffset={sticker.xOffset}
              rotation={sticker.rotation}
              baseOpacity={sticker.baseOpacity * 0.7} // Ligeramente más tenues en las pantallas interiores
            >
              <div className={`relative w-full h-full transform
                ${!sticker.isImagePng 
                  ? "rounded-2xl overflow-hidden shadow-xl border-2 border-white/60" 
                  : ""}`}
              >
                <Image 
                  src={sticker.src} 
                  alt={sticker.alt} 
                  fill 
                  className={sticker.isImagePng ? "object-contain" : "object-cover"}
                  sizes="(max-width: 768px) 100px, 200px"
                />
              </div>
            </Floating>
          ))}
        </div>
      )}

      {/* 3. Contenido Principal */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
      
    </div>
  );
}
