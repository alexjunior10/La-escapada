"use client";

import { messages } from "@/data/messages";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface Screen0WelcomeProps {
  onNext: () => void;
}

export function Screen0Welcome({ onNext }: Screen0WelcomeProps) {
  return (
    <>
      <div className="z-10 flex flex-col items-center text-center max-w-lg md:max-w-xl mx-auto w-full mt-10">
        
        {/* 3. Título */}
        <FadeIn delay={2.5} duration={1}>
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-5 block opacity-90 drop-shadow-sm">
            {messages.screen0.subtitle}
          </span>
        </FadeIn>
        
        <FadeIn delay={2.8} duration={1}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-foreground tracking-tight drop-shadow-sm">
            {messages.screen0.title}
          </h1>
        </FadeIn>

        {/* 4. Tarjeta central elegante */}
        <FadeIn delay={3.2} duration={1}>
          <div className="bg-cards/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] mb-12 border border-white/60 relative">
            {/* Brillo sutil interno */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/60 to-white/10 pointer-events-none"></div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium relative z-10">
              {/* Using the old description for screen 0 since it is not in the new messages.ts explicitly or I can use a hardcoded one */}
              El equipo de producción ha estado preparando algo que aún no está en ningún cartel ni en ningún comunicado oficial. Necesitamos tu criterio para descubrir cuál será la noche más épica de este año.
            </p>
          </div>
        </FadeIn>

        {/* 5. Botón CTA */}
        <FadeIn delay={3.6} duration={1}>
          <Button onClick={onNext} icon={<ArrowRight className="w-5 h-5" />}>
            {messages.screen0.buttonText}
          </Button>
        </FadeIn>
      </div>
    </>
  );
}
