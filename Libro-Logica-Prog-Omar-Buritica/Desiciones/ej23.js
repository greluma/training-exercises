/**
 * *23.	Leer un número entero de tres dígitos y determinar cuántos dígitos primos tiene.
 */
let numUsua = 123;
let cont = 0;
let respuesta = ``;
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

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

for (const iterator of listDigs(numUsua)) {
  if (esPrimo(iterator)) {
    cont++;
    respuesta += `Numero: ${iterator} es primo\n `;
  }
}

console.log(`Cantidad de #s primos ${cont}\n${respuesta}`);
