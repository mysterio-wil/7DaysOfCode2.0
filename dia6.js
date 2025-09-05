// -------------------------------------------
// Día 6 - Lista de compras con opción de eliminar
// #7DaysOfCode - JavaScript
// Autor: Wilmer Gulcochía Sánchez
// -------------------------------------------

// Creamos arrays vacíos para cada categoría
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let otros = [];

// Bucle principal: se repite hasta que el usuario decida salir
let continuar = true;

while (continuar) {
  let accion = prompt(
    "¿Qué deseas hacer?\n1. Agregar alimento\n2. Eliminar alimento\n3. Salir\n(Escribe 1, 2 o 3)"
  );

  if (accion === "1") {
    // Agregar alimento
    let alimento = prompt("¿Qué alimento deseas agregar?");
    let categoria = prompt("¿En qué categoría encaja este alimento? (frutas, lácteos, congelados, dulces, otros)");

    switch (categoria.toLowerCase()) {
      case "frutas":
        frutas.push(alimento);
        break;
      case "lácteos":
      case "lacteos":
        lacteos.push(alimento);
        break;
      case "congelados":
        congelados.push(alimento);
        break;
      case "dulces":
        dulces.push(alimento);
        break;
      default:
        otros.push(alimento);
        break;
    }
  } else if (accion === "2") {
    // Eliminar alimento (solo si hay elementos)
    let todasLasListas = frutas.concat(lacteos, congelados, dulces, otros);
    if (todasLasListas.length === 0) {
      alert("¡No hay elementos en la lista para eliminar!");
      continue;
    }

    // Mostrar lista actual
    let mensaje = "Lista actual:\n";
    if (frutas.length) mensaje += "Frutas: " + frutas.join(", ") + "\n";
    if (lacteos.length) mensaje += "Lácteos: " + lacteos.join(", ") + "\n";
    if (congelados.length) mensaje += "Congelados: " + congelados.join(", ") + "\n";
    if (dulces.length) mensaje += "Dulces: " + dulces.join(", ") + "\n";
    if (otros.length) mensaje += "Otros: " + otros.join(", ") + "\n";
    mensaje += "\n¿Qué alimento deseas eliminar?";

    let eliminar = prompt(mensaje);

    // Función para eliminar de una categoría
    function eliminarDeCategoria(array, nombre) {
      let idx = array.indexOf(eliminar);
      if (idx !== -1) {
        array.splice(idx, 1);
        alert(`"${eliminar}" eliminado de la categoría ${nombre}.`);
        return true;
      }
      return false;
    }

    // Intentar eliminar de cada categoría
    let eliminado =
      eliminarDeCategoria(frutas, "Frutas") ||
      eliminarDeCategoria(lacteos, "Lácteos") ||
      eliminarDeCategoria(congelados, "Congelados") ||
      eliminarDeCategoria(dulces, "Dulces") ||
      eliminarDeCategoria(otros, "Otros");

    if (!eliminado) {
      alert("¡No fue posible encontrar el elemento en la lista!");
    }
  } else if (accion === "3") {
    continuar = false;
  } else {
    alert("Opción no válida. Por favor, elige 1, 2 o 3.");
  }
}

// Mostramos la lista final de compras organizada por categorías
console.log("Lista final de compras:");
console.log("Frutas:", frutas.length > 0 ? frutas.join(", ") : "Ninguna");
console.log("Lácteos:", lacteos.length > 0 ? lacteos.join(", ") : "Ninguno");
console.log("Congelados:", congelados.length > 0 ? congelados.join(", ") : "Ninguno");
console.log("Dulces:", dulces.length > 0 ? dulces.join(", ") : "Ninguno");
console.log("Otros:", otros.length > 0 ? otros.join(", ") : "Ninguno");

// -------------------------------------------
// MINI RESUMEN DÍA 6
// - Aprendimos a eliminar elementos de arrays usando indexOf y splice.
// - Practicamos validaciones para evitar errores al eliminar.
// - Reforzamos el uso de bucles y condicionales para menús interactivos.
// - Mostramos la lista actual y final de forma organizada.
// -------------------------------------------
