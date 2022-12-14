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
let num = 2;
if (num < 0) {
  console.log(`${num} es menor que 0`);
} else if (listDigs(num).length > 2) {
  console.log(`${num} tiene mas de 2 digitos`);
} else {
  if (esPrimo(num)) {
    console.log(`${num} Es primo`);
  } else {
    console.log(`${num} NO es primo`);
  }
}
