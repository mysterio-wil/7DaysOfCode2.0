// -----------------------------
// Día 4 - Juego de Adivinar el Número
// -----------------------------

// Generamos un número aleatorio entre 0 y 10
// Math.random() devuelve un número decimal entre 0 y 1
// Multiplicamos por 10, sumamos 1 y con Math.floor() lo convertimos en entero
const numeroSecreto = Math.floor(Math.random() * 11);

// Guardamos la cantidad de intentos permitidos
const intentosMaximos = 3;

// Variable para controlar si el usuario acertó o no
let acierto = false;

// Bucle para dar hasta 3 intentos al usuario
for (let intento = 1; intento <= intentosMaximos; intento++) {
  // Pedimos un número al usuario
  let numeroUsuario = parseInt(
    prompt(`Intento ${intento}: Adivina el número (entre 0 y 10):`)
  );

  // Comprobamos si el número ingresado coincide con el secreto
  if (numeroUsuario === numeroSecreto) {
    alert(`🎉 ¡Felicidades! Adivinaste el número en el intento ${intento}.`);
    acierto = true;
    break; // Rompe el bucle si ya acertó
  } else {
    alert("❌ Ese no es el número...");
  }
}

// Si terminó el bucle y nunca acertó
if (!acierto) {
  alert(`😢 Lo siento, no adivinaste. El número secreto era: ${numeroSecreto}`);
}

// -----------------------------
// 📌 Resumen Día 4
// -----------------------------
/*
Objetivo:
- Crear un juego para adivinar un número entre 0 y 10 con máximo 3 intentos.

Conceptos aprendidos:
- Math.random() → genera un número decimal aleatorio.
- Math.floor() → redondea hacia abajo (entero).
- for → bucle para repetir código un número fijo de veces.
- break → detiene un bucle antes de terminar.
- parseInt() → convierte un string en número entero.
- Uso de condicionales para verificar si el usuario acertó.

Práctica:
- Implementar lógica de intentos limitados.
- Mostrar mensajes personalizados según acierte o no.
- Usar número aleatorio en lugar de fijo.
*/
