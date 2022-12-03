/**
 * *37.	Leer dos números enteros y determinar cuál es múltiplo de cuál.
 */

let num1 = 13;
let num2 = 9;

if (num1 == 0 || num2 == 0) {
  console.log(`Uno de los dos números es igual a 0`);
} else if (num1 == num2) {
  console.log(`Numero 1: ${num1} es IGUAL a Numero 2: ${num2} `);
} else if (num1 % num2 == 0) {
  console.log(`Numero 1: ${num1} es MÚLTIPLO de Numero 2: ${num2} `);
} else if (num2 % num1 == 0) {
  console.log(`Numero 2: ${num2} es MÚLTIPLO de Numero 1: ${num1} `);
} else {
  console.log(`Ninguno es multiplo del otro`);
}
