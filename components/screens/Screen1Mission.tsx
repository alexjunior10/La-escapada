"use client";

import { messages } from "@/data/messages";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Check, ShieldAlert } from "lucide-react";

interface Screen1MissionProps {
  onNext: () => void;
}

export function Screen1Mission({ onNext }: Screen1MissionProps) {
  return (
    <>
      <FadeIn delay={0.2} duration={1}>
        <div className="flex items-center justify-center w-16 h-16 bg-primary/20 text-primary rounded-full mb-6 shadow-inner mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
      </FadeIn>
      
      <FadeIn delay={0.5} duration={1}>
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-3 block opacity-90">
          {messages.screen1.subtitle}
        </span>
      </FadeIn>
      
      <FadeIn delay={0.8} duration={1}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight text-center">
          {messages.screen1.title}
        </h1>
      </FadeIn>

      <FadeIn delay={1.2} duration={1}>
        <div className="bg-cards/60 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-lg mb-10 border border-white/60 relative text-center max-w-xl mx-auto">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium relative z-10">
            {messages.screen1.description}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={1.8} duration={1}>
        <Button onClick={onNext} icon={<Check className="w-5 h-5" />}>
          {messages.screen1.buttonAccept}
        </Button>
      </FadeIn>
    </>
  );
}
