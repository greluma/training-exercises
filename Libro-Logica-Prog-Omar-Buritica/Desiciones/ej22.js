let num = 965,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

console.log(lista);
if (lista[0] == lista[lista.length - 1]) {
  console.log("Iguales");
} else {
  console.log("Diferentes");
}
