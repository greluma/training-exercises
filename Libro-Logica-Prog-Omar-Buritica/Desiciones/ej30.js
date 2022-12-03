let num = 954564655,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

console.log(lista);
if (lista[1] == lista[lista.length - 2]) {
  console.log("Segundo y penultimo IGUALES");
} else {
  console.log("Segundo y penultimo DIFERENTES");
}
