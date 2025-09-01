// Día 2 - #7DaysOfCode
// Tema: Capturar información del usuario y mostrar mensajes personalizados

// ---- CAPTURAR DATOS DEL USUARIO ----
// Usamos prompt() para recibir información del usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// ---- MOSTRAR MENSAJE PERSONALIZADO ----
// Usamos template strings para insertar variables en el mensaje
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// ---- EJERCICIO OPCIONAL ----
// Preguntar si le gusta estudiar el lenguaje
const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con 1 para SÍ o 2 para NO.`);

// Usamos condicionales if para mostrar un mensaje según la respuesta
if (respuesta == "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} 
if (respuesta == "2") {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}

// 🔹 Consejo adicional
// Puedes agregar más preguntas usando prompt y combinar las respuestas para mostrar mensajes dinámicos

/*
📒 Mini–resumen Día 2:
- prompt() → captura información del usuario y la guarda en una variable.
- alert() → muestra mensajes al usuario.
- Template strings (`Hola ${nombre}`) → permiten insertar variables dentro de un mensaje.
- if → estructura condicional para decidir qué mensaje mostrar según la respuesta.
- Puedes crear experiencias interactivas agregando más preguntas y mensajes personalizados.
*/
