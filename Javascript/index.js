/**
 * promedio = (1.75+ 2+ 1.8+ 1.65+ 1.68) / 5
 */

let sumaAlturas = 0;
const CANT_ALTURAS = 5;
for (let i = 0; i < CANT_ALTURAS; i++) {
  const altura = parseFloat(prompt("Ingrese la altura"));
  sumaAlturas += altura;
}

const promedio = sumaAlturas / CANT_ALTURAS;
console.log(promedio);

for (let index = 0; index < 10; index++) {}
/**
 * 1.75
 * 2
 */
