import { AppEvent } from "@/types";

export const eventsData: AppEvent[] = [
  {
    id: "amen",
    name: "Amen",
    category: "Concierto",
    schedules: [
      { id: "amen-s1", date: "2026-08-21", time: "20:00", label: "21 de Agosto, 8:00 PM" }
    ],
    location: "Teatro Municipal",
    image: "/images/amen.jpg", // TBD
    description: "Un concierto espectacular para disfrutar la mejor música en vivo.",
    price: "$$",
    tags: ["Música", "Rock"]
  },
  {
    id: "hans-zimmer",
    name: "Hans Zimmer Candlelight",
    category: "Concierto",
    schedules: [
      { id: "hans-s1", date: "2026-09-09", time: "21:00", label: "9 de Septiembre, 9:00 PM" }
    ],
    location: "Arena Principal",
    image: "/images/hans-zimmer.jpg",
    description: "Las bandas sonoras más épicas de la historia, en vivo y a la luz de las velas.",
    price: "$$$",
    tags: ["Sinfónico", "Candlelight", "Películas"]
  },
  {
    id: "bacilos",
    name: "Bacilos",
    category: "Concierto",
    schedules: [
      { id: "bacilos-s1", date: "2026-09-18", time: "20:30", label: "18 de Septiembre, 8:30 PM" }
    ],
    location: "Estadio Central",
    image: "/images/bacilos.jpg", // TBD
    description: "Mi primer millón y todos los éxitos para cantar a todo pulmón.",
    price: "$$",
    tags: ["Pop", "Latino"]
  },
  {
    id: "taylor-swift-candlelight",
    name: "Taylor Swift Candlelight",
    category: "Concierto",
    schedules: [
      { id: "taylor-s1", date: "2026-10-19", time: "19:00", label: "19 de Octubre, 7:00 PM" },
      { id: "taylor-s2", date: "2026-10-19", time: "21:00", label: "19 de Octubre, 9:00 PM" }
    ],
    location: "Casa de la Cultura",
    image: "/images/taylor-candlelight.jpg", // TBD
    description: "Tributo sinfónico a la luz de las velas a los mejores éxitos de Taylor Swift.",
    price: "$$$",
    tags: ["Sinfónico", "Swiftie", "Acústico"]
  },
  {
    id: "cine",
    name: "Cine",
    category: "Cine",
    schedules: [
      { id: "cine-s1", date: "Variable", time: "19:00", label: "Cualquier día, Noche" },
      { id: "cine-s2", date: "Variable", time: "16:00", label: "Cualquier día, Tarde" }
    ],
    location: "Cineplanet / Cinemark",
    image: "/images/cine.jpg", // TBD
    description: "Palomitas, buena película y una gran compañía.",
    price: "$",
    tags: ["Películas", "Relajado"]
  },
  {
    id: "teatro",
    name: "Teatro",
    category: "Teatro",
    schedules: [
      { id: "teatro-s1", date: "Variable", time: "20:00", label: "Fines de semana, 8:00 PM" }
    ],
    location: "Teatro Nacional",
    image: "/images/teatro.jpg", // TBD
    description: "Una obra de teatro para disfrutar de la actuación en vivo.",
    price: "$$",
    tags: ["Cultura", "Arte"]
  },
  {
    id: "hablando-huevadas",
    name: "Hablando Huevadas",
    category: "Show",
    schedules: [
      { id: "hh-s1", date: "Variable", time: "21:00", label: "Domingos, 9:00 PM" }
    ],
    location: "Teatro Canout",
    image: "/images/hh.jpg", // TBD
    description: "Humor negro y muchas risas garantizadas.",
    price: "$$",
    tags: ["Comedia", "Show"]
  },
  {
    id: "marchar-keiko",
    name: "Marchar contra Keiko",
    category: "Otro",
    schedules: [
      { id: "mk-s1", date: "2026-08-15", time: "17:00", label: "15 de Agosto, 5:00 PM" }
    ],
    location: "Plaza San Martín",
    image: "/images/marchar contra keiko.jpg",
    description: "Llevar su piedra.",
    price: "Gratis",
    tags: ["Marcha", "Protesta", "Piedras"]
  }
];
