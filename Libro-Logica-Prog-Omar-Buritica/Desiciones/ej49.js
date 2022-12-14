const numUsu = 12;

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

const mult4 = (numero) => {
  return numero % 4 == 0;
};

const ultDig = (numero) => numero % 10;

mult4(numUsu)
  ? console.log(
      `El numero ${numUsu} ES multiplo de 4 por tanto su ultimo digito ${ultDig(
        numUsu
      )} es primo: ${esPrimo(ultDig(numUsu))}`
    )
  : console.log(`El numero ${numUsu} NO es multiplo de 4`);

// console.log(ultDig(numUsu));
// console.log(mult4(numUsu));
