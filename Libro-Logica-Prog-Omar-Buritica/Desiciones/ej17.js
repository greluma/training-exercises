let num = 119111115,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

console.log(lista);

mayorD = 0;
for (const iterator of lista) {
  if (iterator > mayorD) {
    mayorD = iterator;
  }
}
console.log(mayorD);
