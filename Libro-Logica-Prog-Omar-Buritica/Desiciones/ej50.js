let numUsua = 11;
const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};
// console.log(listDigs(numUsua));

let aux = 0;
if (numUsua % 4 == 0) {
  aux = 1;
  console.log(numUsua / 2);
}
if (numUsua % 5 == 0) {
  aux = 1;
  console.log(numUsua * numUsua);
}
if (numUsua % 6 == 0) {
  aux = 1;
  console.log(listDigs(numUsua)[0]);
}

if (aux == 0) {
  console.log("Numero no es multiplo de 4,5,6");
}
