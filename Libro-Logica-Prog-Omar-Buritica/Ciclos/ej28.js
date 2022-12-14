let numUsua1 = 9845;
let numUsua2 = 5623;

const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

numUsua1 = listDigs(numUsua1);
numUsua2 = listDigs(numUsua2);
console.log(numUsua1);
console.log(numUsua2);

const cantPrim = (lista) => {
  let cont = 0;
  lista.forEach((element) => {
    if (esPrimo(element)) {
      //   console.log(element);
      cont++;
    }
  });
  return cont;
};

const cantPrim1 = cantPrim(numUsua1);
const cantPrim2 = cantPrim(numUsua2);

console.log(cantPrim1);
console.log(cantPrim2);
