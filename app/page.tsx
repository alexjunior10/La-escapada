"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlowLayout } from "@/components/ui/FlowLayout";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { ConfettiShower } from "@/components/animations/ConfettiShower";
import { Screen0Welcome } from "@/components/screens/Screen0Welcome";
import { Screen1Mission } from "@/components/screens/Screen1Mission";
import { Screen2Experiences } from "@/components/screens/Screen2Experiences";
import { Screen3Availability } from "@/components/screens/Screen3Availability";
import { Screen4Food } from "@/components/screens/Screen4Food";
import { Screen5PostEvent } from "@/components/screens/Screen5PostEvent";
import { Screen6Analysis } from "@/components/screens/Screen6Analysis";
import { Screen7Result } from "@/components/screens/Screen7Result";
import { MissionData } from "@/types";
import { eventsData } from "@/data/events";
import { foodsData } from "@/data/foods";
import { activitiesData } from "@/data/activities";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [confettiActive, setConfettiActive] = useState(false);
  const [confettiImage, setConfettiImage] = useState<string | null>(null);
  
  const [missionData, setMissionData] = useState<MissionData>({
    sessionId: "",
    sessionStartTime: 0,
    selectedEvents: [],
    selectedSchedules: [],
    selectedFoods: [],
    selectedActivities: [],
  });

  useEffect(() => {
    const generateSessionId = () => {
      const date = new Date().toISOString().slice(0,10).replace(/-/g, '');
      const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toUpperCase();
      return `ctf-${date}-${hex}`;
    };
    
    setMissionData(prev => ({
      ...prev,
      sessionId: generateSessionId(),
      sessionStartTime: Date.now()
    }));
  }, []);

  const triggerConfetti = (imageSrc: string) => {
    // Reproducir sonido
    const audio = new Audio('/audio/seleccion.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio no pudo reproducirse automáticamente", e));

    setConfettiImage(imageSrc);
    setConfettiActive(true);
    // Reiniciar para permitir múltiples disparos
    setTimeout(() => {
      setConfettiActive(false);
    }, 100);
  };

  const handleNextScreen = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  const handlePreviousScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    }
  };

  const handleToggleEvent = (id: string) => {
    const isAdding = !missionData.selectedEvents.includes(id);
    if (isAdding) {
      const eventInfo = eventsData.find(e => e.id === id);
      if (eventInfo?.image) triggerConfetti(eventInfo.image);
    }
    
    setMissionData(prev => ({
      ...prev,
      selectedEvents: isAdding
        ? [...prev.selectedEvents, id]
        : prev.selectedEvents.filter(eventId => eventId !== id)
    }));
  };

  const handleToggleSchedule = (id: string) => {
    setMissionData(prev => {
      const isAdding = !prev.selectedSchedules.includes(id);
      
      // Si está intentando agregar pero ya hay 3, ignoramos
      if (isAdding && prev.selectedSchedules.length >= 3) {
        return prev;
      }
      
      return {
        ...prev,
        selectedSchedules: isAdding
          ? [...prev.selectedSchedules, id]
          : prev.selectedSchedules.filter(scheduleId => scheduleId !== id)
      };
    });
    
    // Reproducir sonido simple si no hay imagen específica para el horario
    const audio = new Audio('/audio/seleccion.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio no pudo reproducirse", e));
  };

  const handleToggleFood = (id: string) => {
    const isAdding = !missionData.selectedFoods.includes(id);
    if (isAdding) {
      const foodInfo = foodsData.find(f => f.id === id);
      if (foodInfo?.image) triggerConfetti(foodInfo.image);
    }

    setMissionData(prev => ({
      ...prev,
      selectedFoods: isAdding
        ? [...prev.selectedFoods, id]
        : prev.selectedFoods.filter(foodId => foodId !== id)
    }));
  };

  const handleToggleActivity = (id: string) => {
    const isAdding = !missionData.selectedActivities.includes(id);
    if (isAdding) {
      const activityInfo = activitiesData.find(a => a.id === id);
      if (activityInfo?.image) triggerConfetti(activityInfo.image);
    }

    setMissionData(prev => ({
      ...prev,
      selectedActivities: isAdding
        ? [...prev.selectedActivities, id]
        : prev.selectedActivities.filter(actId => actId !== id)
    }));
  };

  // Definir qué rango de stickers mostrar según la pantalla
  const getStickersRangeForScreen = (screen: number): [number, number] => {
    switch (screen) {
      case 0:
      case 1: return [0, 8]; // Mostrar 8 stickers en la primera pantalla
      case 2: return [4, 12]; // Mostrar otros 8 en la segunda
      case 3: return [2, 10];
      case 4: return [0, 12]; // Mostrar todos
      case 5: return [0, 12]; // Screen 5: Post-Evento
      case 6: return [0, 0];  // Screen 6: Analysis (hide stickers)
      case 7: return [0, 12]; // Screen 7: Result
      default: return [0, 12];
    }
  };

  return (
    <>
      <AudioPlayer />
      <ConfettiShower active={confettiActive} selectedImage={confettiImage} />
      
      <FlowLayout 
        showStickers={currentScreen !== 6}
        stickersRange={getStickersRangeForScreen(currentScreen)}
        onBack={currentScreen > 0 && currentScreen < 6 ? handlePreviousScreen : undefined}
      >
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
                selectedSchedules={missionData.selectedSchedules}
                onToggleSchedule={handleToggleSchedule}
                onNext={handleNextScreen}
              />
            </motion.div>
          )}

          {currentScreen === 4 && (
            <motion.div
              key="screen-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Screen4Food 
                selectedFoods={missionData.selectedFoods}
                onToggleFood={handleToggleFood}
                onNext={handleNextScreen}
              />
            </motion.div>
          )}

          {currentScreen === 5 && (
            <motion.div
              key="screen-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Screen5PostEvent 
                selectedActivities={missionData.selectedActivities}
                onToggleActivity={handleToggleActivity}
                onNext={handleNextScreen}
              />
            </motion.div>
          )}

          {currentScreen === 6 && (
            <motion.div
              key="screen-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Screen6Analysis 
                onNext={handleNextScreen}
              />
            </motion.div>
          )}

          {currentScreen === 7 && (
            <motion.div
              key="screen-7"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
              className="w-full"
            >
              <Screen7Result 
                missionData={missionData}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </FlowLayout>
    </>
  );
}
