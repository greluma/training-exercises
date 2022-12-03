let num = 326,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

console.log(lista);
let cont = 0;
for (const iterator of lista) {
  if (iterator % 2 == 0) {
    ++cont;
  }
}

console.log(`Tiene ${cont} numeros pares`);
