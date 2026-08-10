"use client";

import { useMemo } from "react";
import { messages } from "@/data/messages";
import { eventsData } from "@/data/events";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { EventDateSelector } from "@/components/ui/EventDateSelector";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Screen3AvailabilityProps {
  selectedEvents: string[];
  selectedSchedules: string[];
  onToggleSchedule: (id: string) => void;
  onNext: () => void;
}

export function Screen3Availability({ 
  selectedEvents, 
  selectedSchedules, 
  onToggleSchedule, 
  onNext 
}: Screen3AvailabilityProps) {
  const isNextDisabled = selectedSchedules.length === 0;

  // Filtrar eventos que el usuario seleccionó en el paso anterior
  const eventsToShow = eventsData.filter(e => selectedEvents.includes(e.id));

  return (
    <div className="w-full flex flex-col pt-8 pb-24 z-10 relative">
      <FadeIn delay={0.1} duration={0.8}>
        <ProgressBar currentStep={2} totalSteps={4} />
      </FadeIn>

      <FadeIn delay={0.3} duration={0.8}>
        <div className="text-center mb-8">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-2 block opacity-90">
            {messages.screen3.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {messages.screen3.title}
          </h2>
          <p className="text-foreground/70 mt-4 text-lg max-w-lg mx-auto">
            {messages.screen3.question}
          </p>
        </div>
      </FadeIn>

      <div className="w-full max-w-2xl mx-auto mb-12 flex flex-col gap-6">
        <EventDateSelector 
          events={eventsToShow}
          selectedScheduleIds={selectedSchedules}
          onSelect={onToggleSchedule}
        />
      </div>

      <FadeIn delay={0.8} duration={0.8}>
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-primary animate-pulse">
            Selecciona hasta 3 opciones y presiona Continuar
          </p>
          <Button 
            onClick={onNext} 
            disabled={isNextDisabled}
          >
            {messages.screen3.buttonNext}
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
