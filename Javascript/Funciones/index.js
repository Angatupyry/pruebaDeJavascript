/**
 * Funciones
 */

// Función declarativa
function nombreFuncion() {
  // Lo que haga la función
}

//Función anónima
const nombreFuncion = () => {};

/**
 * 1 Crear la función
 * Puede tener parámetros (no es obligatorio)
 * El parámetro es una varible que recibe en la llamada
 * El parámetro solo vive dentro de la función
 */
function saludo(nombre, apellido) {
  return `Hola, ${nombre} ${apellido}`;
}

/**
 * 2 Hacer la llamada
 *      escribir el nombre de la función con los paréntesis
 */

const nombre = "César";
const apellido = "Rolón";

saludo(nombre, apellido);

const saludoDeCesar = saludo(nombre, apellido);

console.log(saludoDeCesar);

// saludo("Ronaldinho", "El dientes");

/**
 * Suma
 */

function suma(a, b) {
  return a + b;
}

console.log(suma(5, 5));
console.log(suma(15, 25));

const suma = (a, b) => a + b;

console.log(suma(5, 5));
console.log(suma(15, 25));
