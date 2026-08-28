export type Sticker = {
  id: string;
  src: string;
  alt: string;
  positionClass: string;
  delay: number;
  duration: number;
  yOffset: number;
  xOffset: number;
  rotation: number;
  baseOpacity: number;
  isImagePng?: boolean;
};

export type EventCategory = 'Concierto' | 'Teatro' | 'Cine' | 'Show' | 'Otro';

export type EventSchedule = {
  id: string;
  date: string; // e.g., "2026-08-21" or "Variable"
  time: string; // e.g., "20:00"
  label: string; // e.g., "21 de Agosto, 8:00 PM"
};

export type AppEvent = {
  id: string;
  name: string;
  category: EventCategory;
  schedules: EventSchedule[];
  location: string;
  image: string;
  description: string;
  price: string;
  tags: string[];
};

export type Food = {
  id: string;
  name: string;
  image: string;
};

export type Activity = {
  id: string;
  name: string;
  image: string;
};

export type MissionData = {
  sessionId: string;
  sessionStartTime: number;
  selectedEvents: string[]; // Event IDs
  selectedSchedules: string[]; // Schedule IDs
  selectedFoods: string[]; // Food IDs
  selectedActivities: string[]; // Activity IDs
};
