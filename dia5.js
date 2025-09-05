
// -------------------------------------------
// Día 5 - Lista de compras con categorías
// #7DaysOfCode - JavaScript
// Autor: Wilmer Gulcochía Sánchez
// -------------------------------------------

// Creamos arrays vacíos para cada categoría
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let otros = [];

// Bucle principal: se repite hasta que el usuario diga "no"
let agregarMas = "sí";

while (agregarMas.toLowerCase() === "sí") {
  // Preguntamos si el usuario desea agregar un alimento
  agregarMas = prompt("¿Quieres agregar un alimento a tu lista de compras? (sí/no)");

  if (agregarMas.toLowerCase() === "sí") {
    // Capturamos el alimento
    let alimento = prompt("¿Qué alimento deseas agregar?");

    // Preguntamos la categoría del alimento
    let categoria = prompt("¿En qué categoría encaja este alimento? (frutas, lácteos, congelados, dulces, otros)");

    // Clasificamos el alimento usando switch
    switch (categoria.toLowerCase()) {
      case "frutas":
        frutas.push(alimento);
        break;
      case "lácteos":
      case "lacteos": // Permitimos ambas formas, con tilde y sin tilde
        lacteos.push(alimento);
        break;
      case "congelados":
        congelados.push(alimento);
        break;
      case "dulces":
        dulces.push(alimento);
        break;
      default:
        // Si no coincide con ninguna categoría, va a "otros"
        otros.push(alimento);
        break;
    }
  }
}

// Mostramos la lista de compras organizada por categorías
console.log("Lista de compras:");
console.log("Frutas:", frutas.length > 0 ? frutas.join(", ") : "Ninguna");
console.log("Lácteos:", lacteos.length > 0 ? lacteos.join(", ") : "Ninguno");
console.log("Congelados:", congelados.length > 0 ? congelados.join(", ") : "Ninguno");
console.log("Dulces:", dulces.length > 0 ? dulces.join(", ") : "Ninguno");
console.log("Otros:", otros.length > 0 ? otros.join(", ") : "Ninguno");

// -------------------------------------------
// MINI RESUMEN DÍA 5
// - Aprendimos a usar arrays para guardar listas de elementos.
// - Usamos .push() para agregar elementos a un array.
// - Practicamos switch y condicionales para clasificar elementos.
// - Reforzamos el uso del bucle while para repetir acciones hasta que el usuario diga "no".
// - Vimos cómo mostrar listas organizadas con console.log y join().
// -------------------------------------------
