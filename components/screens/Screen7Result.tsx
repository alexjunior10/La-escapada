"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { MissionData } from "@/types";
import { eventsData } from "@/data/events";
import { foodsData } from "@/data/foods";
import { activitiesData } from "@/data/activities";
import confetti from "canvas-confetti";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

interface Screen7ResultProps {
  missionData: MissionData;
}

export function Screen7Result({ missionData }: Screen7ResultProps) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noGone, setNoGone] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);

    // Enviar datos en segundo plano sin interrumpir la UX
    try {
      const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      let device = 'desktop';
      if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
        device = 'tablet';
      } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        device = 'mobile';
      }

      fetch('/api/submit-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          sessionId: missionData.sessionId,
          eventosSeleccionados: missionData.selectedEvents.join(", "),
          eventoPrincipal: selectedEventNames || "N/A",
          fechaSeleccionada: selectedScheduleLabels || "N/A",
          horaSeleccionada: selectedScheduleLabels || "N/A",
          comidaSeleccionada: selectedFoodNames || "N/A",
          actividadSeleccionada: selectedActivityNames || "N/A",
          durationSeconds: Math.floor((Date.now() - missionData.sessionStartTime) / 1000),
          device: device,
          resultadoFinal: "accepted",
          version: "v1.0.0"
        })
      }).catch(e => console.error("Envío fallido, continuando normal:", e));
    } catch (error) {
      console.error("Error al preparar envío:", error);
    }

    const duration = 4000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors: ['#ffb7b2', '#fce4ec', '#f48fb1', '#e1bee7'] });
      confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors: ['#ffb7b2', '#fce4ec', '#f48fb1', '#e1bee7'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    const audio = new Audio('/audio/success.mp3');
    audio.volume = 0.6;
    audio.play().catch(() => {});
    frame();
  };

  const handleNoHover = () => {
    if (noGone) return;
    const newAttempts = noAttempts + 1;
    setNoAttempts(newAttempts);
    if (newAttempts >= 5) {
      setNoGone(true);
      return;
    }
    // Escapar en dirección aleatoria
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPosition({ x, y });
  };

  // Datos seleccionados
  const selectedEventNames = missionData.selectedEvents
    .map(id => eventsData.find(e => e.id === id)?.name)
    .filter(Boolean).join(" o ");

  const selectedScheduleLabels = missionData.selectedSchedules.map(scheduleId => {
    for (const event of eventsData) {
      const schedule = event.schedules.find(s => s.id === scheduleId);
      if (schedule) return schedule.label;
    }
    return "";
  }).filter(Boolean).join(" o ");

  const selectedFoodNames = missionData.selectedFoods
    .map(id => foodsData.find(f => f.id === id)?.name)
    .filter(Boolean).join(", ");

  const selectedActivityNames = missionData.selectedActivities
    .map(id => activitiesData.find(a => a.id === id)?.name)
    .filter(Boolean).join(" y ");

  let foodVerb = "disfrutaremos de";
  if (missionData.selectedFoods.length > 0) {
    const onlyDrinks = missionData.selectedFoods.every(id => id === 'cafe');
    const onlyFood = missionData.selectedFoods.every(id => id !== 'cafe');
    if (onlyDrinks) foodVerb = "tomaremos";
    else if (onlyFood) foodVerb = "comeremos";
    else foodVerb = "degustaremos";
  }

  const downloadPdf = async () => {
    const element = document.getElementById("setlist-card");
    if (!element) {
      alert("No se encontró el elemento a renderizar.");
      return;
    }
    
    try {
      // Usamos html-to-image porque soporta oklab y los nuevos filtros CSS
      const imgData = await toPng(element, { 
        backgroundColor: "#fdf2f8", // Tono rosa pastel
        pixelRatio: 2
      });
      
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      // Protegemos contra canvas vacío
      if (width === 0 || height === 0) {
        throw new Error("El elemento tiene dimensión 0");
      }
      
      const pdf = new jsPDF({
        orientation: width > height ? "landscape" : "portrait",
        unit: "px",
        format: [width, height]
      });
      
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("VIP-Pass-TheErasTour.pdf");
      
      setIsDownloaded(true);
      alert("¡VIP Pass Descargado! 🎟️ Ahora envíaselo a Alex por WhatsApp.");
    } catch (error: any) {
      console.error("Error generando PDF:", error);
      alert(`Hubo un error guardando el PDF: ${error?.message || 'Error desconocido'}`);
    }
  };

  if (isDownloaded) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[70vh] pt-8 pb-24 z-10 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center bg-cards/60 backdrop-blur-md rounded-3xl p-12 border-2 border-primary/30 shadow-[0_10px_40px_rgba(var(--primary),0.15)]"
        >
          <p className="text-7xl mb-8 animate-bounce">🎉</p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">¡Está en el setlist!</h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-md mx-auto leading-relaxed">
            Esta noche ya es historia. Y como dice Taylor: <br/><br/>
            <em className="text-primary font-bold text-2xl block border-y border-primary/20 py-4 my-2">"Long story short, I survived."</em>
          </p>
          <p className="mt-8 text-foreground/60 text-lg font-medium">Nos vemos pronto 🌟</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[70vh] pt-8 pb-24 z-10 relative">
      <FadeIn delay={0.2} duration={0.8}>
        <div className="text-center mb-10">
          <span className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full text-lg md:text-xl font-black tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(var(--accent),0.6)] animate-pulse border-2 border-white/50">
            The Eras Tour: Sold Out 🎤
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter mb-4">
            100%
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            De Compatibilidad
          </h2>
          <p className="text-foreground/60 mt-2 text-lg italic">
            "I knew you were trouble when you walked in." — Era obvio, ¿no?
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.8} duration={0.8} className="w-full max-w-2xl">
        <div id="setlist-card" className="bg-cards/60 backdrop-blur-md rounded-3xl p-8 border-2 border-primary/30 shadow-[0_10px_40px_rgba(var(--primary),0.15)] relative overflow-hidden">
          <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</div>

          <h3 className="text-xl font-bold text-primary mb-6 text-center border-b border-primary/20 pb-4">
            🎤 El Setlist Oficial de Nuestra Noche
          </h3>

          <div className="space-y-4 text-foreground/90 text-lg leading-relaxed text-center relative z-10">
            <p>
              Esta es la canción que nunca salió en ningún álbum, pero está a punto de ser el hit del año.
            </p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-foreground/60 text-sm block mb-2">Track 1 · La apertura</span>
              Vamos a <strong className="text-primary">{selectedEventNames || "un lugar sorpresa"}</strong>
              <br/>el <strong className="text-primary">{selectedScheduleLabels || "día que mejor nos quede"}</strong>.
            </p>
            <p>
              <span className="text-foreground/60 text-sm block mb-1">Track 2 · El intermedio</span>
              {foodVerb.charAt(0).toUpperCase() + foodVerb.slice(1)} <strong className="text-primary">{selectedFoodNames || "algo glorioso"}</strong>
              {" "}para no perder energía.
            </p>
            <p>
              <span className="text-foreground/60 text-sm block mb-1">Track 3 · El encore</span>
              Y como todo buen concierto necesita un final épico:{" "}
              <strong className="text-primary">{selectedActivityNames || "algo memorable"}</strong>.
            </p>
            <p className="font-semibold text-xl pt-4 italic">
              "Are you ready for it?" 🌙
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={1.5} duration={0.8}>
        <div className="mt-10 flex flex-col items-center gap-6">
          {confirmed ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="text-center flex flex-col items-center"
            >
              <h2 className="text-3xl font-black text-primary mb-2">¡Setlist Confirmado! 🎉</h2>
              <p className="text-lg text-foreground/70 mb-6 font-medium">
                Solo falta un paso para oficializar la gira...
              </p>
              <Button onClick={downloadPdf} className="text-lg px-8 py-5 bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                Descargar VIP Pass y enviar a Alex 💌
              </Button>
            </motion.div>
          ) : (
            <>
              <Button onClick={handleConfirm} className="text-lg px-12 py-6 shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-110 transition-transform">
                Añadir al setlist ✨
              </Button>

              {/* Botón esquivo de "No" */}
              <div className="relative h-16 flex items-center justify-center w-full">
                <AnimatePresence>
                  {!noGone ? (
                    <motion.button
                      animate={{ x: noPosition.x, y: noPosition.y }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      onHoverStart={handleNoHover}
                      onTouchStart={handleNoHover}
                      className="px-6 py-3 rounded-full border-2 border-foreground/30 bg-white/50 backdrop-blur-sm text-foreground/70 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow select-none cursor-pointer"
                    >
                      😅 Ya no quiero salir {noAttempts > 0 ? "😏".repeat(Math.min(noAttempts, 3)) : ""}
                    </motion.button>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-foreground/60 text-sm italic font-medium"
                    >
                      🎶 Lo siento, ya no hay regreso.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </FadeIn>
    </div>
  );
}


