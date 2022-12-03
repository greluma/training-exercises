/**
 * *39.	Leer tres números enteros y determina si el penúltimo dígito de los tres números es igual.
 */

let lista = [142, 342, 6442, 842, 242, 243];
let ultimoD = Math.trunc(lista[0] / 10) % 10;
let cont = 0;
for (const iterator of lista) {
  if (Math.trunc(iterator / 10) % 10 == ultimoD) {
    cont++;
  }
}
if (cont == lista.length) {
  console.log("Iguales");
} else {
  console.log("Diferentes");
}
