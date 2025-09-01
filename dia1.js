// Día 1 - #7DaysOfCode
// Tema: Comparaciones en JavaScript (== vs ===)

// Declaramos variables de tipo Number y String
let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

// ---- MOSTRAR TIPOS DE DATOS ----
// typeof devuelve el tipo de dato de la variable
console.log("Tipo de numeroUn:", typeof numeroUn)     // number
console.log("Tipo de stringUn:", typeof stringUn)     // string
console.log("Tipo de numeroTreinta:", typeof numeroTreinta) // number
console.log("Tipo de stringTreinta:", typeof stringTreinta) // string
console.log("Tipo de numeroDiez:", typeof numeroDiez) // number
console.log("Tipo de stringDiez:", typeof stringDiez) // string

// ---- PRIMER CASO ----
// Usamos "==" para comprobar si tienen el mismo valor
// Usamos "!==" para asegurarnos de que sean de tipos diferentes
if (numeroUn == stringUn && numeroUn !== stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

// ---- SEGUNDO CASO ----
// Aquí queremos verificar si tienen el mismo valor Y el mismo tipo
// Por eso usamos "===" (comparación estricta)
if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

// ---- TERCER CASO ----
// Igual que el primero: comprobamos mismo valor pero distinto tipo
if (numeroDiez == stringDiez && numeroDiez !== stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

/*
📒 Mini–resumen Día 1:
- "==" compara solo valores y permite conversión de tipos (ej: 1 == '1' → true).
- "===" compara valor y tipo, sin conversión (ej: 1 === '1' → false).
- "!==" significa diferente en valor o tipo.
- "typeof" devuelve el tipo de dato de una variable (number, string, etc).
*/