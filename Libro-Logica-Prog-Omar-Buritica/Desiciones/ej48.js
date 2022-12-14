const numUsu = 7;

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

const menor100 = (numero) => {
  return numero <= 100;
};

menor100(numUsu)
  ? console.log(`El numero ${numUsu} es primo: ${esPrimo(numUsu)}`)
  : console.log(`No es menor que 100`);

// console.log(menor100(numUsu));
