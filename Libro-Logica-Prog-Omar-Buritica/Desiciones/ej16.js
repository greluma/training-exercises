let num = 9845,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

console.log(lista);

//falta
