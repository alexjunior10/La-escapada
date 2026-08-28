import { Sticker } from "@/types";

export const stickersData: Sticker[] = [
  {
    id: "sticker-1",
    src: "/images/gato cara curiosa.jpg",
    alt: "Gato curioso",
    positionClass: "top-10 left-10 w-24 h-24",
    delay: 0.1,
    duration: 3,
    yOffset: 10,
    xOffset: 5,
    rotation: 5,
    baseOpacity: 1,
    isImagePng: false
  },
  {
    id: "sticker-2",
    src: "/images/girasol.png",
    alt: "Girasol",
    positionClass: "bottom-20 right-10 w-32 h-32",
    delay: 0.5,
    duration: 4,
    yOffset: -15,
    xOffset: -10,
    rotation: -10,
    baseOpacity: 0.9,
    isImagePng: true
  },
  {
    id: "sticker-3",
    src: "/images/gato lo sabia.jpg",
    alt: "Gato lo sabia",
    positionClass: "top-1/3 right-1/4 w-20 h-20",
    delay: 1.2,
    duration: 3.5,
    yOffset: 8,
    xOffset: -5,
    rotation: 15,
    baseOpacity: 0.8,
    isImagePng: false
  },
  {
    id: "sticker-4",
    src: "/images/flor-de-cerezo.png",
    alt: "Flor de cerezo",
    positionClass: "bottom-1/3 left-1/4 w-28 h-28",
    delay: 0.8,
    duration: 4.5,
    yOffset: -12,
    xOffset: 15,
    rotation: -5,
    baseOpacity: 0.85,
    isImagePng: true
  },
  {
    id: "sticker-5",
    src: "/images/gato corazon.jpg",
    alt: "Gato corazon",
    positionClass: "top-20 right-20 w-36 h-36",
    delay: 0.3,
    duration: 5,
    yOffset: 20,
    xOffset: 10,
    rotation: 8,
    baseOpacity: 0.7,
    isImagePng: false
  },
  {
    id: "sticker-6",
    src: "/images/meme taylor.jpg",
    alt: "Meme taylor",
    positionClass: "bottom-10 left-10 w-24 h-24",
    delay: 1.5,
    duration: 3.8,
    yOffset: -8,
    xOffset: -5,
    rotation: -12,
    baseOpacity: 0.9,
    isImagePng: false
  },
  {
    id: "sticker-7",
    src: "/images/gato uwu.jpg",
    alt: "Gato uwu",
    positionClass: "top-1/2 left-10 w-32 h-32",
    delay: 0.6,
    duration: 4.2,
    yOffset: 15,
    xOffset: 8,
    rotation: 20,
    baseOpacity: 0.8,
    isImagePng: false
  },
  {
    id: "sticker-8",
    src: "/images/flor.png",
    alt: "Flor",
    positionClass: "top-1/4 left-1/3 w-20 h-20",
    delay: 1.1,
    duration: 3.2,
    yOffset: -10,
    xOffset: 5,
    rotation: -8,
    baseOpacity: 0.95,
    isImagePng: true
  },
  {
    id: "sticker-9",
    src: "/images/gato pensando.jpg",
    alt: "Gato pensando",
    positionClass: "bottom-1/4 right-1/3 w-28 h-28",
    delay: 0.9,
    duration: 4.8,
    yOffset: 12,
    xOffset: -15,
    rotation: 12,
    baseOpacity: 0.85,
    isImagePng: false
  },
  {
    id: "sticker-10",
    src: "/images/llama alegre.jpg",
    alt: "Llama alegre",
    positionClass: "top-10 right-1/2 w-24 h-24",
    delay: 0.4,
    duration: 3.5,
    yOffset: -15,
    xOffset: 10,
    rotation: -15,
    baseOpacity: 0.75,
    isImagePng: false
  },
  {
    id: "sticker-11",
    src: "/images/ayuwoki.jpg",
    alt: "Ayuwoki",
    positionClass: "bottom-10 right-1/2 w-32 h-32",
    delay: 1.4,
    duration: 4.5,
    yOffset: 18,
    xOffset: -8,
    rotation: 18,
    baseOpacity: 0.8,
    isImagePng: false
  },
  {
    id: "sticker-12",
    src: "/images/meme taylor 3.jpg",
    alt: "Meme taylor 3",
    positionClass: "top-1/2 right-10 w-20 h-20",
    delay: 0.7,
    duration: 3.8,
    yOffset: -8,
    xOffset: 12,
    rotation: -20,
    baseOpacity: 0.9,
    isImagePng: false
  }
];

export const getStickersSlice = (start: number, end: number) => {
  return stickersData.slice(start, end);
};
