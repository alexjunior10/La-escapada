"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

interface Screen6AnalysisProps {
  onNext: () => void;
}

const loadingTexts = [
  "Taylor está revisando el setlist...",
  "Comprobando compatibilidad con Shake It Off...",
  "Consultando el diario de Taylor de 2006...",
  "Calculando nivel de Swiftie suprema...",
  "Analizando si hay sitio en el VIP...",
  "Resultados casi listos... 🎤"
];

export function Screen6Analysis({ onNext }: Screen6AnalysisProps) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Avanzar de texto cada segundo
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 900);

    // Llenar la barra de progreso a lo largo de 5 segundos
    const totalTime = 5000;
    const intervalTime = 50;
    const increment = 100 / (totalTime / intervalTime);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Ir a la siguiente pantalla después de 5.5 segundos
    const timeout = setTimeout(() => {
      onNext();
    }, 5500);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [onNext]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh] pt-12 pb-24 z-10 relative">
      <FadeIn delay={0.2} duration={0.5}>
        <div className="flex flex-col items-center max-w-md w-full mx-auto">
          {/* Gato Hacker */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_40px_rgba(var(--primary),0.4)] animate-pulse">
            <Image 
              src="/images/gato-hacker.gif" 
              alt="Gato Hacker Analizando" 
              fill 
              className="object-cover" 
              unoptimized={true}
              onError={(e) => {
                // Fallback a una imagen existente si no ha subido el gif aún
                e.currentTarget.src = "/images/gato cara curiosa.jpg";
              }}
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight text-center mb-6">
            Analizando nivel de compatibilidad...
          </h2>

          {/* Barra de progreso */}
          <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden mb-4 border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between w-full text-sm font-mono text-primary mb-8">
            <span>[SYS.CALCULATING]</span>
            <span>{Math.floor(progress)}%</span>
          </div>

          {/* Texto dinámico */}
          <p className="text-foreground/70 font-mono text-sm md:text-base animate-pulse h-6 text-center">
            {`> ${loadingTexts[textIndex]}`}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
