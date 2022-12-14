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
  let cont = 0;
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  listaAux.forEach((element) => {
    cont += element;
  });
  return cont;
};

let cont = 0;
let obj = {
  posicion: -1,
  num: 0,
  sumaDig: 0,
};
vector.forEach((element) => {
  if (listDigs(element) > cont) {
    cont = listDigs(element);
    obj.posicion = vector.indexOf(element) + 1;
    obj.num = element;
    obj.sumaDig = listDigs(element);
  }
});

console.log(obj);
