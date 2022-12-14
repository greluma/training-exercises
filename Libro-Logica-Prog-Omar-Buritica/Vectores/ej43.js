let vector = [345, 3123, 768678, 234234, 4564777777, 12327777, 345646, 687768];
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

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};
let obj = { cantidad: 0 };
let general = 0;
vector.forEach((element) => {
  let cont = 0;
  listDigs(element).forEach((element) => {
    if (esPrimo(element)) {
      cont++;
    }
  });
  if (cont == general && cont != 0) {
    obj.cantidad++;
    obj[element] = cont;
  }
  if (cont > general) {
    general = cont;
    obj = { cantidad: 1 };
    obj[element] = cont;
  }
});

console.log(obj);
