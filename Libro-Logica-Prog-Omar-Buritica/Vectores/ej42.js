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

let obj = { cantidad: 0 };
vector.forEach((element) => {
  let cont = 0;
  listDigs(element).forEach((element) => {
    if (element % 2 == 0 && !element == 0) {
      cont++;
    }
  });
  if (!cont == 0 && cont % 2 == 0) {
    obj[element] = cont;
    obj.cantidad++;
  }
});

console.log(obj);
