/**
 * *10.	Leer un número entero y determinar a cuánto es igual la suma de todos los enteros comprendidos entre 1 y el número leído.
 */
const numUsu = 1111;
let cont = 0;
for (let i = 1; i < numUsu; i++) {
  //   console.log(i);
  cont += i;
}

console.log(cont);
