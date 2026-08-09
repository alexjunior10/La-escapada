"use client";

import { motion } from "framer-motion";
import { AppEvent, EventSchedule } from "@/types";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventDateSelectorProps {
  events: AppEvent[];
  selectedScheduleId: string | null;
  onSelect: (scheduleId: string) => void;
}

export function EventDateSelector({ events, selectedScheduleId, onSelect }: EventDateSelectorProps) {
  // Extract all schedules from the selected events
  const allSchedules = events.flatMap(event => 
    event.schedules.map(schedule => ({
      ...schedule,
      eventName: event.name,
      location: event.location,
      eventId: event.id
    }))
  );

  if (allSchedules.length === 0) {
    return (
      <div className="text-center p-8 bg-cards/50 rounded-2xl border border-white/20">
        <p className="text-foreground/70">No hay fechas disponibles para las experiencias seleccionadas.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 w-full">
      {allSchedules.map((schedule, index) => {
        const isSelected = selectedScheduleId === schedule.id;
        
        return (
          <motion.button
            key={schedule.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={() => onSelect(schedule.id)}
            className={`relative w-full text-left overflow-hidden rounded-2xl transition-all duration-300
              ${isSelected 
                ? "border-2 border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.3)]" 
                : "border-2 border-white/20 bg-cards/60 hover:bg-white/40 hover:border-white/40"
              }
              backdrop-blur-md p-5`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-bold text-lg ${isSelected ? "text-primary" : "text-foreground"}`}>
                {schedule.eventName}
              </h3>
              {isSelected && (
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                  Seleccionado
                </span>
              )}
            </div>
            
            <div className="space-y-2 mt-3 text-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/70" />
                <span className="font-medium">{schedule.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary/70" />
                <span>{schedule.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary/70" />
                <span className="text-sm">{schedule.location}</span>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.button>
        );
      })}
    </div>
  );
}
