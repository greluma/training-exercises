//! Mal
/**
 * *21.	Leer tres números enteros de dos dígitos cada uno y determinar en cuál de ellos se encuentra el mayor dígito.
 */

let num1 = 54,
  num2 = 17,
  num3 = 34;
let lista = [];
const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};
lista = lista.concat(listDigs(num1));
lista = lista.concat(listDigs(num2));
lista = lista.concat(listDigs(num3));

console.log(lista);

let menor = 100000000;
for (const iterator of lista) {
  if (iterator < menor) {
    menor = iterator;
  }
}
console.log(menor);
