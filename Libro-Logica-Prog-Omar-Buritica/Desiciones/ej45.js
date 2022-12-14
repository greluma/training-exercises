/**
 * *45.	Leer un número entero de 2 dígitos y si es par mostrar en pantalla la suma de sus dígitos, si es primo y menor que 10 mostrar en pantalla su último dígito y si es múltiplo de 5 y menor que 30 mostrar en pantalla el primer dígito.
 */
let numUsu = 25;
const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};
let lista = listDigs(numUsu);

const par = (num) => {
  let cont = 0;
  if (num % 2 == 0) {
    lista.forEach((element) => {
      cont += element;
    });
    return cont;
  }
  return `${numUsu} No es Par`;
};

console.log(par(numUsu));

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

const primo10 = (num) => {
  if (esPrimo(num) && num < 10) {
    return `El ultimo digito es ${lista[lista.length - 1]}`;
  }
  return `${numUsu} No es Primo y menor que 10`;
};

console.log(primo10(numUsu));

const mult5 = (num) => {
  if (num % 5 == 0 && num < 30) {
    return `El primer digito es ${lista[0]}`;
  }
  return `${numUsu} No es Primo y menor que 10`;
};

console.log(mult5(numUsu));
