PRD
Proyecto: La Cita Improbablemente Perfecta

Versión: 1.0

Autor: Alex Ojeda

Estado: En desarrollo

1. Visión del Proyecto
Objetivo

Crear una experiencia web interactiva que convierta una simple invitación a salir en una historia divertida, elegante y memorable.

El objetivo no es pedir una cita inmediatamente.

El objetivo es generar curiosidad, hacer reír, sorprender y construir una experiencia emocional antes de revelar la verdadera intención.

La aplicación debe sentirse como una pequeña aventura interactiva personalizada para una única persona.

Filosofía

No es un formulario.

No es una encuesta.

No es una landing page.

Debe sentirse como un videojuego ligero mezclado con una historia interactiva.

Cada pantalla debe recompensar la curiosidad del usuario.

Objetivos de experiencia

Queremos que la persona pase por estas emociones:

Curiosidad

↓

Diversión

↓

Sorpresa

↓

Complicidad

↓

Emoción

↓

Sonrisa

↓

Revelación final

Público objetivo

Una única persona.

T.F.

Todo el contenido está personalizado según sus gustos.

Personalidad del proyecto

El proyecto transmite:

Elegancia

Humor absurdo

Calidez

Creatividad

Romanticismo sutil

Cuidado por los detalles

Nada debe sentirse forzado.

Referencias visuales

Apple

Vercel

Stripe

Framer

Notion

Aesthetic Taylor Swift

Pinterest

Interfaces minimalistas

Estilo gráfico

Minimalista

Mucho espacio en blanco

Pastel

Tarjetas flotantes

Glow

Sombras suaves

Bordes redondeados

Animaciones lentas

Nunca saturado

Paleta

Background

#F8F3FF

Primary

#A855F7

Secondary

#EC4899

Accent

#FFD6EC

Cards

#FFFFFF

Text

#222222

Tipografía

Poppins

Pesos:

300

400

600

700

Animaciones

Toda la aplicación debe sentirse viva.

Nunca estática.

Animaciones:

Fade

Slide

Scale

Glow

Hover

Floating

Parallax ligero

Mouse follow ligero

Stickers

La aplicación utiliza stickers como parte de la narrativa.

No son decoración aleatoria.

Representan el humor del proyecto.

Los stickers provienen de:

public/images/

Se utilizarán:

PNG

WebP

Transparencias

Recortes tipo sticker

Distribución

Entre 8 y 12 stickers por pantalla.

Tamaños variables.

Algunos:

90px

Otros:

150px

Otros:

220px

Algunos parcialmente fuera del viewport.

Nunca perfectamente alineados.

Movimiento

Cada sticker tiene:

Velocidad distinta

Rotación distinta

Opacidad distinta

Flotación distinta

No deben sincronizarse.

Audio

La música comienza únicamente después del primer clic del usuario.

Nunca automáticamente.

Volumen bajo.

Loop.

Debe existir un botón para:

Activar

Silenciar

Flujo completo
Pantalla 0

Bienvenida

Objetivo

Generar curiosidad.

No mencionar la cita.

No mencionar romance.

Solo misterio.

Pantalla 1

Aceptación de misión

Explicar que un comité internacional necesita ayuda para construir una experiencia perfecta.

Pantalla 2

Experiencias favoritas

Selección múltiple.

Opciones:

Bacilos

Amen

Candlelight Taylor Swift

Hans Zimmer

Cine

Teatro

Conciertos

Hablando Huevadas

Pantalla 3

Disponibilidad

Calendario elegante.

Seleccionar:

día

hora

Pantalla 4

Comida

Selección múltiple.

Opciones:

Parrilla

Carne

Patasca

Mote

Café

Helado

Pantalla 5

Después del evento

Caminar

Conversar

Fotos

Mirador

Postre

Pantalla 6

Resultados

Animación.

"Analizando compatibilidad..."

Barra de progreso.

Stickers reaccionando.

Pantalla 7

Resumen

Mostrar:

Evento

Fecha

Hora

Comida

Después

Todo bonito.

Pantalla 8

Revelación

Texto:

"Hay un pequeño detalle..."

Pausa.

Animación.

"Me gustaría vivir esta experiencia contigo."

Pantalla 9

Confirmación

Botones:

Aceptar ❤️

Todavía estoy procesando esta misión 😹

Nunca un botón "No" agresivo.

Eventos disponibles

Amen

21 agosto

Hans Zimmer

9 septiembre

Bacilos

18 septiembre

Taylor Swift Candlelight

19 octubre

Cine

Variable

Teatro

Variable

Humor

El humor debe ser inteligente.

Nunca infantil.

Nunca ofensivo.

Ejemplos:

Memes de gatos

Ayuwoki

Humor absurdo

Taylor memes

Easter Eggs

Gato escondido

Taylor escondida

Animaciones secretas

Clicks múltiples

Confetti

Miaus

Arquitectura
app/

components/

animations/

screens/

ui/

hooks/

data/

public/

images/

audio/

fonts/

Componentes

Botón

Card

Progress

Sticker

FloatingSticker

Title

Subtitle

QuestionCard

OptionCard

Calendar

Timeline

SummaryCard

AudioPlayer

ThemeProvider

Data

No hardcodear información.

Toda la información debe vivir en:

data/events.ts

data/questions.ts

data/foods.ts

data/messages.ts

data/stickers.ts
Performance

Todas las imágenes optimizadas.

Lazy Loading.

Responsive.

Mobile First.

Responsive

Desktop

Tablet

Mobile

Accesibilidad

Contraste adecuado.

Botones grandes.

Animaciones opcionalmente reducidas.

Tecnologías

Next.js

TypeScript

Tailwind

Framer Motion

Lucide

Fases del desarrollo
Fase 1

Arquitectura

Fase 2

Pantalla 0

Fase 3

Pantallas 1-3

Fase 4

Pantallas 4-6

Fase 5

Revelación final

Fase 6

Pulido visual

Fase 7

Audio

Fase 8

Easter Eggs

Fase 9

Optimización

Criterios de éxito

La experiencia se considera exitosa si:

La usuaria completa todo el flujo.
Se ríe o sonríe durante el recorrido.
Percibe que la experiencia fue hecha específicamente para ella.
La revelación final resulta natural y emotiva, sin sentirse forzada.
La interfaz transmite cuidado, creatividad y atención al detalle.
Fuera del alcance (versión 1)

Para mantener el proyecto enfocado, esta primera versión no incluirá:

Registro o inicio de sesión.
Base de datos.
Panel de administración.
Integración con Google Calendar.
Envío de correos electrónicos.
Compartir en redes sociales.
Sistema de analítica.
Backend o APIs.
Chat en tiempo real.

La aplicación será completamente frontend, con todos los datos definidos localmente en archivos de configuración.