/**
 * *38.	Leer tres números enteros y determinar si el último dígito de los tres números es igual.
 */

let lista = [1426, 3426, 64426, 8426, 2426, 2426];
let ultimoD = lista[0] % 10;
let cont = 0;
for (const iterator of lista) {
  if (iterator % 10 == ultimoD) {
    cont++;
  }
}
if (cont == lista.length) {
  console.log("Iguales");
} else {
  console.log("Diferentes");
}
