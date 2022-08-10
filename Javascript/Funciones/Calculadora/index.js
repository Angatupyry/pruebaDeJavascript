// Realizar una función que reciba como parámetro dos valores y realice las operaciones básicas
// dependiendo del signo
/**
 * Retorna el resultado de dos valores según las operaciones matemáticas básicas
 * @param {*} valorUno number
 * @param {*} valorDos number
 * @param {*} signo string
 * @returns
 */
const calculadora = (valorUno, valorDos, signo) => {
  /**
   * switch
   */
  switch (signo) {
    case "+":
    case "S":
      return valorUno + valorDos;
    case "-":
      return valorUno - valorDos;
    case "*":
      return valorUno * valorDos;
    case "/":
      return valorUno / valorDos;

    default:
      return "Su signo no está dentro de las operaciones básicas";
  }
  //   if (signo === "+") {
  //     return valorUno + valorDos;
  //   } else if (signo === "-") {
  //     return valorUno - valorDos;
  //   } else if (signo === "*") {
  //     return valorUno * valorDos;
  //   } else if (signo === "/") {
  //     return valorUno / valorDos;
  //   }
};

console.log(calculadora(12, 3, "/"));
console.log(calculadora(12, 3, "*"));
console.log(calculadora(12, 3, "-"));
console.log(calculadora(12, 3, "S"));
