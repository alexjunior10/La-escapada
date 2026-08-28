import { AppEvent } from "@/types";

export const eventsData: AppEvent[] = [
  {
    id: "amen",
    name: "Amén",
    category: "Concierto",
    location: "Por definir",
    image: "/images/amen.jpg",
    description: "Concierto de Amén",
    price: "Variable",
    tags: ["Música", "Rock"],
    schedules: [
      {
        id: "amen-1",
        date: "2026-08-21",
        time: "Noche",
        label: "21 de Agosto"
      }
    ]
  },
  {
    id: "hans-zimmer",
    name: "Hans Zimmer",
    category: "Concierto",
    location: "Por definir",
    image: "/images/hans-zimmer.jpg",
    description: "Tributo o concierto de Hans Zimmer",
    price: "Variable",
    tags: ["Música Clásica", "Soundtracks"],
    schedules: [
      {
        id: "hz-1",
        date: "2026-09-09",
        time: "Noche",
        label: "9 de Septiembre"
      }
    ]
  },
  {
    id: "bacilos",
    name: "Bacilos",
    category: "Concierto",
    location: "Por definir",
    image: "/images/bacilos.jpg",
    description: "Concierto de Bacilos",
    price: "Variable",
    tags: ["Música", "Pop Latino"],
    schedules: [
      {
        id: "bacilos-1",
        date: "2026-09-18",
        time: "Noche",
        label: "18 de Septiembre"
      }
    ]
  },
  {
    id: "taylor-swift",
    name: "Taylor Swift Candlelight",
    category: "Concierto",
    location: "Por definir",
    image: "/images/taylor-candlelight.jpg",
    description: "Tributo a Taylor Swift a la luz de las velas",
    price: "Variable",
    tags: ["Música", "Tributo", "Acústico"],
    schedules: [
      {
        id: "taylor-1",
        date: "2026-10-19",
        time: "Noche",
        label: "19 de Octubre"
      }
    ]
  },
  {
    id: "cine",
    name: "Cine",
    category: "Cine",
    location: "Cine a elegir",
    image: "/images/cine.jpg",
    description: "Película a elección",
    price: "Variable",
    tags: ["Películas", "Relajado"],
    schedules: [
      {
        id: "cine-1",
        date: "Variable",
        time: "Tarde/Noche",
        label: "Fecha a coordinar"
      }
    ]
  },
  {
    id: "teatro",
    name: "Teatro",
    category: "Teatro",
    location: "Teatro a elegir",
    image: "/images/teatro.jpg",
    description: "Obra de teatro a elección",
    price: "Variable",
    tags: ["Arte", "Cultura"],
    schedules: [
      {
        id: "teatro-1",
        date: "Variable",
        time: "Tarde/Noche",
        label: "Fecha a coordinar"
      }
    ]
  },
  {
    id: "conciertos",
    name: "Conciertos (Otros)",
    category: "Concierto",
    location: "Por definir",
    image: "/images/bar con enanos.jpg",
    description: "Algún otro concierto interesante",
    price: "Variable",
    tags: ["Música", "En vivo"],
    schedules: [
      {
        id: "conciertos-1",
        date: "Variable",
        time: "Noche",
        label: "Fecha a coordinar"
      }
    ]
  },
  {
    id: "hablando-huevadas",
    name: "Hablando Huevadas",
    category: "Show",
    location: "Teatro Canout",
    image: "/images/hh.jpg",
    description: "Show de comedia en vivo",
    price: "Variable",
    tags: ["Comedia", "Show"],
    schedules: [
      {
        id: "hh-1",
        date: "Variable",
        time: "Noche",
        label: "Fecha a coordinar"
      }
    ]
  }
];
