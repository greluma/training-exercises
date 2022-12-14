let numUsua = 1829;
const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};
console.log(listDigs(numUsua));

//* ej24
/*let cont = 0;
listDigs(numUsua).forEach((element) => {
  if (element % 2 == 0) {
    cont += element;
  }
});

console.log(cont);*/

//* ej25
let cont = 0;
listDigs(numUsua).forEach((element) => {
  cont += element;
});

console.log(Math.trunc(cont / listDigs(numUsua).length));

cont = 10000000000000;
listDigs(numUsua).forEach((element) => {
  if (element < cont) {
    cont = element;
  }
});
console.log(cont);

cont = 0;
listDigs(numUsua).forEach((element) => {
  if (element > cont) {
    cont = element;
  }
});
console.log(cont);
