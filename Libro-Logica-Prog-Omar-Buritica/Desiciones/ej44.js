/**
 * *44.	Leer un número entero de 4 dígitos y determinar si el primer dígito es múltiplo de alguno de los otros dígitos.
 */

let num = 1429,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

lista.reverse();
// console.log(lista);
// console.log(lista.length);

let contMultiplos = 0;
let listaMultiplos = [];
for (let index = 1; index < lista.length; index++) {
  if (lista[0] % lista[index] == 0) {
    contMultiplos++;
    listaMultiplos.push(lista[index]);
  }
}

// console.log(contMultiplos);
// console.log(listaMultiplos);

if (contMultiplos == 0) {
  console.log(`El primer digito ${lista[0]} no es multiplo de ningun otro`);
} else {
  console.log(`El primer digito ${lista[0]} es multiplo de ${listaMultiplos}`);
}
