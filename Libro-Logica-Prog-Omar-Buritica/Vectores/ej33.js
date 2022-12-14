const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};

let cont = 0;
vector.forEach((element) => {
  listDigs(element).forEach((element) => {
    if (element % 2 == 0) {
      console.log(element);
      cont += element;
    }
  });
});

console.log(cont);
