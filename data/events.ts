import { AppEvent } from "@/types";

export const eventsData: AppEvent[] = [
  {
    id: "bella-durmiente",
    name: "La Bella Durmiente",
    category: "Ballet",
    location: "La Cúpula de las Artes",
    image: "/images/bella-durmiente.jpg",
    description: "Ballet de San Petersburgo",
    price: "Variable",
    tags: ["Ballet", "Arte", "Danza"],
    schedules: [
      {
        id: "bella-1",
        date: "2026-10-07",
        time: "8:00 PM",
        label: "Miércoles 7 de Octubre"
      },
      {
        id: "bella-2",
        date: "2026-10-08",
        time: "5:00 PM",
        label: "Jueves 8 de Octubre"
      }
    ]
  },
  {
    id: "jose-jose",
    name: "José José Candlelight",
    category: "Candlelight",
    location: "Teatro Principal - Manuel A. Segura",
    image: "/images/jose-jose-candlelight.jpg",
    description: "Tributo a José José a la luz de las velas",
    price: "Variable",
    tags: ["Música", "Tributo", "Romántico"],
    schedules: [
      {
        id: "jose-jose-1",
        date: "2026-10-11",
        time: "5:00 PM",
        label: "Domingo 11 de Octubre"
      }
    ]
  },
  {
    id: "cuatro-estaciones",
    name: "Las Cuatro Estaciones",
    category: "Ballet",
    location: "Gran Teatro Nacional",
    image: "/images/cuatro-estaciones.png",
    description: "Ballet Nacional del Perú - Vivaldi",
    price: "Variable",
    tags: ["Ballet", "Música Clásica", "Danza"],
    schedules: [
      {
        id: "cuatro-estaciones-1",
        date: "2026-09-26",
        time: "8:00 PM",
        label: "Sábado 26 de Septiembre"
      },
      {
        id: "cuatro-estaciones-2",
        date: "2026-09-27",
        time: "5:30 PM",
        label: "Domingo 27 de Septiembre"
      }
    ]
  },
  {
    id: "taylor-swift",
    name: "Taylor Swift Candlelight",
    category: "Candlelight",
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
    id: "parque-leyendas",
    name: "Parque de las Leyendas",
    category: "Paseo",
    location: "Parque de las Leyendas",
    image: "/images/parque-leyendas.png",
    description: "Paseo, zoológico y aire libre",
    price: "Variable",
    tags: ["Paseo", "Naturaleza", "Al aire libre"],
    schedules: [
      {
        id: "parque-leyendas-1",
        date: "2026-09-27",
        time: "11:00 AM",
        label: "Domingo 27 de Septiembre"
      }
    ]
  },
  {
    id: "romeo-y-julieta",
    name: "Romeo y Julieta",
    category: "Teatro",
    location: "Teatro Municipal de Lima",
    image: "/images/romeo-y-julieta.png",
    description: "Obra de teatro en el Teatro Municipal",
    price: "Variable",
    tags: ["Teatro", "Romance", "Drama", "Cultura"],
    schedules: [
      {
        id: "romeo-1",
        date: "2026-10-10",
        time: "8:00 PM",
        label: "Sábado 10 de Octubre"
      },
      {
        id: "romeo-2",
        date: "2026-10-11",
        time: "7:00 PM",
        label: "Domingo 11 de Octubre"
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
        date: "2026-10-15",
        time: "7:30 PM",
        label: "Jueves 15 de Octubre"
      }
    ]
  }
];
