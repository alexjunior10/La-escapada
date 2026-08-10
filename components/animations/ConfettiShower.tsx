"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ConfettiShowerProps {
  active: boolean;
  selectedImage: string | null;
}

interface Particle {
  id: number;
  src: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const flowerImages = [
  "/images/sakura.png",
  "/images/flor (1).png",
  "/images/flor.png",
  "/images/flor-de-cerezo.png",
  "/images/girasol.png",
  "/images/rosa.png",
  "/images/rosa (1).png",
  "/images/jazmin.png",
  "/images/saponaria.png",
];

export function ConfettiShower({ active, selectedImage }: ConfettiShowerProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (active && selectedImage) {
      // Create a batch of particles
      const newParticles: Particle[] = [];
      const particleCount = 20; // Number of particles per shower
      
      for (let i = 0; i < particleCount; i++) {
        // Randomly pick either a flower or the selected image
        const isSelectedImage = Math.random() > 0.6; // 40% chance it's the selected image
        const src = isSelectedImage 
          ? selectedImage 
          : flowerImages[Math.floor(Math.random() * flowerImages.length)];
        
        newParticles.push({
          id: Date.now() + i,
          src,
          x: Math.random() * 100, // Random X position 0-100vw
          delay: Math.random() * 0.5, // Random start delay
          duration: 2 + Math.random() * 3, // Fall duration 2-5s
          size: 30 + Math.random() * 40, // Random size 30px-70px
          rotation: Math.random() * 360, // Random starting rotation
        });
      }
      
      setParticles(prev => [...prev, ...newParticles]);

      // Clean up these specific particles after they finish falling
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 6000);
    }
  }, [active, selectedImage]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              top: "-10%", 
              left: `${particle.x}%`,
              rotate: particle.rotation,
              opacity: 0
            }}
            animate={{ 
              top: "110%", 
              rotate: particle.rotation + (Math.random() > 0.5 ? 360 : -360),
              opacity: [0, 1, 1, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: particle.duration,
              delay: particle.delay,
              ease: "linear"
            }}
            className="absolute"
            style={{ width: particle.size, height: particle.size }}
          >
            {/* If it's a flower it's probably transparent png, if it's the image it might be a jpg so add rounded full */}
            <div className={`relative w-full h-full overflow-hidden ${particle.src === selectedImage ? 'rounded-xl shadow-lg border-2 border-primary/50' : ''}`}>
               <Image 
                src={particle.src} 
                alt="confetti" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
