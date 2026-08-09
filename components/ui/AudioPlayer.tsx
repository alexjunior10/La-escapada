"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "@/data/config";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Intentamos reproducir el audio al primer clic en cualquier parte de la app
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasStarted && audioRef.current) {
        audioRef.current.volume = siteConfig.audio.defaultVolume;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(err => {
          console.warn("Audio autoplay prevented by browser", err);
        });
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    
    return () => {
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, [hasStarted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir que el click active el primer play si ya estamos mutando
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasStarted(true);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/audio/background-music.mp3" 
        loop 
        preload="auto"
      />
      
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleMute}
          className="bg-cards/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/40 text-primary hover:scale-110 transition-transform focus:outline-none"
          aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5 opacity-50" />
          )}
        </button>
      </div>
    </>
  );
}
