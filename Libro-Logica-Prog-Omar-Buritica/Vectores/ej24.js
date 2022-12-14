const vector = [129999999, 345444477, 4568999999, 89089, 2345234, 56756];
const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.length;
};

let cont = 0;
let obj = {};
vector.forEach((element) => {
  //   console.log(listDigs(element));
  if (listDigs(element) > cont) {
    cont = listDigs(element);
    obj = {};
    obj[element] = listDigs(element);
  }
  if (listDigs(element) == cont) {
    obj[element] = listDigs(element);
  }
});

console.log(obj);
