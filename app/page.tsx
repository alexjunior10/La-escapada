"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlowLayout } from "@/components/ui/FlowLayout";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { AnalyzingTransition } from "@/components/ui/AnalyzingTransition";
import { Screen0Welcome } from "@/components/screens/Screen0Welcome";
import { Screen1Mission } from "@/components/screens/Screen1Mission";
import { Screen2Experiences } from "@/components/screens/Screen2Experiences";
import { Screen3Availability } from "@/components/screens/Screen3Availability";
import { MissionData } from "@/types";
import { siteConfig } from "@/data/config";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const [missionData, setMissionData] = useState<MissionData>({
    selectedEvents: [],
    selectedSchedule: null,
    selectedFoods: [],
    selectedActivities: [],
  });

  const handleNextScreen = () => {
    // Show transition if moving from screen 1 to 2, 2 to 3, etc.
    if (currentScreen > 0) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setCurrentScreen((prev) => prev + 1);
      }, siteConfig.theme.transitionDuration);
    } else {
      setCurrentScreen((prev) => prev + 1);
    }
  };

  const handleToggleEvent = (id: string) => {
    setMissionData(prev => ({
      ...prev,
      selectedEvents: prev.selectedEvents.includes(id)
        ? prev.selectedEvents.filter(eventId => eventId !== id)
        : [...prev.selectedEvents, id]
    }));
  };

  const handleSelectSchedule = (id: string) => {
    setMissionData(prev => ({
      ...prev,
      selectedSchedule: id
    }));
  };

  return (
    <>
      <AudioPlayer />
      
      <FlowLayout showStickers={!isAnalyzing && currentScreen <= 3}>
        <AnimatePresence mode="wait">
          {currentScreen === 0 && (
            <motion.div
              key="screen-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full flex-1 flex"
            >
              <Screen0Welcome onNext={handleNextScreen} />
            </motion.div>
          )}
          
          {currentScreen === 1 && (
            <motion.div
              key="screen-1"
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full flex-1 flex flex-col items-center justify-center pt-8"
            >
              <Screen1Mission onNext={handleNextScreen} />
            </motion.div>
          )}

          {currentScreen === 2 && (
            <motion.div
              key="screen-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Screen2Experiences 
                selectedEvents={missionData.selectedEvents}
                onToggleEvent={handleToggleEvent}
                onNext={handleNextScreen}
              />
            </motion.div>
          )}

          {currentScreen === 3 && (
            <motion.div
              key="screen-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Screen3Availability 
                selectedEvents={missionData.selectedEvents}
                selectedSchedule={missionData.selectedSchedule}
                onSelectSchedule={handleSelectSchedule}
                onNext={() => alert("¡Hasta aquí llegamos en la Fase 3! \nEventos: " + missionData.selectedEvents.join(", ") + "\nHorario: " + missionData.selectedSchedule)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </FlowLayout>

      <AnimatePresence>
        {isAnalyzing && <AnalyzingTransition />}
      </AnimatePresence>
    </>
  );
}
