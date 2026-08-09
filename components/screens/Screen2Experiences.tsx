"use client";

import { messages } from "@/data/messages";
import { eventsData } from "@/data/events";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { OptionCard } from "@/components/ui/OptionCard";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Screen2ExperiencesProps {
  selectedEvents: string[];
  onToggleEvent: (id: string) => void;
  onNext: () => void;
}

export function Screen2Experiences({ selectedEvents, onToggleEvent, onNext }: Screen2ExperiencesProps) {
  const isNextDisabled = selectedEvents.length === 0;

  return (
    <div className="w-full flex flex-col pt-8 pb-24">
      <FadeIn delay={0.1} duration={0.8}>
        <ProgressBar currentStep={1} totalSteps={4} />
      </FadeIn>

      <FadeIn delay={0.3} duration={0.8}>
        <div className="text-center mb-8">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-2 block opacity-90">
            {messages.screen2.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {messages.screen2.title}
          </h2>
          <p className="text-foreground/70 mt-4 text-lg max-w-lg mx-auto">
            {messages.screen2.question}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mb-12">
        {eventsData.map((event, index) => (
          <OptionCard
            key={event.id}
            id={event.id}
            title={event.name}
            description={event.description}
            image={event.image}
            selected={selectedEvents.includes(event.id)}
            onClick={() => onToggleEvent(event.id)}
            index={index}
          />
        ))}
      </div>

      <FadeIn delay={1} duration={0.8}>
        <div className="flex justify-center">
          <Button 
            onClick={onNext} 
            disabled={isNextDisabled}
          >
            {messages.screen2.buttonNext}
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
