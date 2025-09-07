
// ------------------------------------------- 
// Día 7 - Calculadora Interactiva
// #7DaysOfCode - JavaScript
// Autor: Wilmer Gulcochía Sánchez (Asumiendo el mismo autor que dia6.js)
// ------------------------------------------- 

// Función para realizar la suma de dos números
function suma(num1, num2) {
    return num1 + num2;
}

// Función para realizar la resta de dos números
function resta(num1, num2) {
    return num1 - num2;
}

// Función para realizar la multiplicación de dos números
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función para realizar la división de dos números
function division(num1, num2) {
    // Verifica si el divisor es cero para evitar errores
    if (num2 === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return num1 / num2;
}

// Variable para controlar el bucle principal de la calculadora
let continuar = true;

// Bucle principal: la calculadora se ejecuta hasta que el usuario decida salir
while (continuar) {
    // Solicita al usuario que elija una operación
    let opcion = prompt(
        "Elige una operación:\n" +
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División\n" +
        "5. Salir"
    );

    // Si el usuario elige '5' (Salir), termina el programa
    if (opcion === "5") {
        alert("Hasta la próxima.");
        continuar = false;
        break;
    }

    // Solicita los dos números para la operación
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    // Valida que los valores ingresados sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        continue; // Vuelve al inicio del bucle para pedir una nueva operación
    }

    let resultado;
    // Utiliza un switch para ejecutar la función correspondiente a la opción elegida
    switch (opcion) {
        case "1": // Opción Suma
            resultado = suma(num1, num2);
            break;
        case "2": // Opción Resta
            resultado = resta(num1, num2);
            break;
        case "3": // Opción Multiplicación
            resultado = multiplicacion(num1, num2);
            break;
        case "4": // Opción División
            resultado = division(num1, num2);
            break;
        default: // Opción no válida
            alert("Opción no válida. Por favor, elige una opción del 1 al 5.");
            continue; // Vuelve al inicio del bucle
    }

    // Muestra el resultado de la operación
    alert("El resultado es: " + resultado);
}

// ------------------------------------------- 
// MINI RESUMEN DÍA 7
// - Implementación de una calculadora interactiva.
// - Uso de funciones separadas para cada operación matemática (suma, resta, multiplicación, división).
// - Control de flujo con bucles (while) y condicionales (switch).
// - Manejo de entrada/salida de usuario con prompt() y alert().
// - Validación básica de entrada de números.
// - Manejo de casos especiales como la división por cero.
// -------------------------------------------
