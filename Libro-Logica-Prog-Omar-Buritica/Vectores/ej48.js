const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 1000));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

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
let cont = 0;
vector.forEach((element) => {
  if (esPrimo(element)) {
    console.log(element);
    let aux = 0;
    listDigs(element).forEach((dig) => {
      console.log(dig);
      if (Math.trunc(dig % 2) == 0) {
        aux++;
      }
    });
    if (aux == cont && aux > 0) {
      obj.cantidad++;
      obj[element] = aux;
    }
    if (aux > cont && aux > 0) {
      cont = aux;
      obj.cantidad = 1;
      obj[element] = aux;
    }
  }
});

console.log(obj);
