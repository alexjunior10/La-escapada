"use client";

import { messages } from "@/data/messages";
import { foodsData } from "@/data/foods";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { OptionCard } from "@/components/ui/OptionCard";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Screen4FoodProps {
  selectedFoods: string[];
  onToggleFood: (id: string) => void;
  onNext: () => void;
}

export function Screen4Food({ selectedFoods, onToggleFood, onNext }: Screen4FoodProps) {
  const isNextDisabled = selectedFoods.length === 0;

  return (
    <div className="w-full flex flex-col pt-8 pb-24 z-10 relative">
      <FadeIn delay={0.1} duration={0.8}>
        <ProgressBar currentStep={3} totalSteps={4} />
      </FadeIn>

      <FadeIn delay={0.3} duration={0.8}>
        <div className="text-center mb-8">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-2 block opacity-90">
            {messages.screen4.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {messages.screen4.title}
          </h2>
          <p className="text-foreground/70 mt-4 text-lg max-w-lg mx-auto">
            {messages.screen4.question}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mb-12">
        {foodsData.map((food, index) => (
          <OptionCard
            key={food.id}
            id={food.id}
            title={food.name}
            image={food.image}
            selected={selectedFoods.includes(food.id)}
            onClick={() => onToggleFood(food.id)}
            index={index}
          />
        ))}
      </div>

      <FadeIn delay={0.8} duration={0.8}>
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-primary animate-pulse">
            Selecciona una o más opciones y presiona Continuar
          </p>
          <Button 
            onClick={onNext} 
            disabled={isNextDisabled}
          >
            {messages.screen4.buttonNext}
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
