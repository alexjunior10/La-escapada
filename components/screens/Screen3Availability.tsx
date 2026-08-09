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
  selectedSchedule: string | null;
  onSelectSchedule: (id: string) => void;
  onNext: () => void;
  onBack?: () => void; // Optional, might be good to go back, but not required by PRD
}

export function Screen3Availability({ 
  selectedEvents, 
  selectedSchedule, 
  onSelectSchedule, 
  onNext 
}: Screen3AvailabilityProps) {
  
  const isNextDisabled = !selectedSchedule;
  
  // Filter only the events the user selected in the previous step
  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => selectedEvents.includes(event.id));
  }, [selectedEvents]);

  return (
    <div className="w-full flex flex-col pt-8 pb-24 relative z-10">
      <FadeIn delay={0.1} duration={0.8}>
        <ProgressBar currentStep={2} totalSteps={4} />
      </FadeIn>

      <FadeIn delay={0.3} duration={0.8}>
        <div className="text-center mb-10">
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

      <div className="w-full max-w-2xl mx-auto mb-12">
        <EventDateSelector 
          events={filteredEvents}
          selectedScheduleId={selectedSchedule}
          onSelect={onSelectSchedule}
        />
      </div>

      <FadeIn delay={0.8} duration={0.8}>
        <div className="flex justify-center gap-4">
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
