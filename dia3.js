// ===============================
// 🚀 Día 3 - Juego de Decisiones
// ===============================
//
// Desafío:
// Crear un mini-juego donde el usuario elige su camino en el mundo
// de la programación. Usaremos estructuras condicionales (if/else)
// y bucles (while) para tomar decisiones dinámicas.
//
// ===============================

// Pregunta inicial: ¿Front-End o Back-End?
let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')");

// Variable para almacenar la especialización elegida
let tecnologia = "";

// Evaluamos la elección inicial
if (area.toLowerCase() === "front-end") {
  tecnologia = prompt("¿Quieres aprender React o Vue?");
} else if (area.toLowerCase() === "back-end") {
  tecnologia = prompt("¿Quieres aprender C# o Java?");
} else {
  alert("No elegiste un área válida. Intenta de nuevo.");
}

// Ahora preguntamos si quiere especializarse o ser Fullstack
let camino = prompt("¿Quieres seguir especializándote en " + area + " o convertirte en Fullstack? (Escribe 'Especializarse' o 'Fullstack')");

if (camino.toLowerCase() === "especializarse") {
  alert("¡Excelente! Sigue profundizando en " + tecnologia + " y serás un crack en " + area + "!");
} else if (camino.toLowerCase() === "fullstack") {
  alert("¡Genial! Aprender múltiples tecnologías te abrirá muchas puertas.");
} else {
  alert("No elegiste un camino válido.");
}

// ===============================
// Parte final: Lista de tecnologías adicionales
// ===============================
let respuesta = "ok"; // Control del bucle
while (respuesta.toLowerCase() === "ok") {
  let nuevaTecnologia = prompt("¿Qué otra tecnología te gustaría aprender?");
  alert("¡Genial! " + nuevaTecnologia + " es una excelente opción para tu carrera.");
  respuesta = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para continuar o cualquier otra cosa para salir)");
}

alert("¡Gracias por jugar! 🚀 Sigue aprendiendo y creciendo como programador.");

// ===============================
// 📌 Mini Resumen Día 3
// ===============================
//
// ✅ Aprendimos a usar estructuras condicionales (if/else, else if).
// ✅ Creamos un flujo dinámico donde las respuestas del usuario cambian el resultado.
// ✅ Introducimos bucles con `while` para repetir preguntas hasta que el usuario decida salir.
// ✅ Simulamos un "juego de decisiones" típico en programación.
//
// Este ejercicio muestra cómo los condicionales y bucles permiten
// crear interactividad y experiencias dinámicas en aplicaciones.
// ===============================
