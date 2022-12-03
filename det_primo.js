/**
 * *Determinar si un numero es primo
 */

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

console.log(esPrimo(6));

//Mostrar lso 100 primeros primos
/*for (let x = 1; x <= 100; x++) {
  if (esPrimo(x) == true) {
    console.log(`El numero ${x}: ${esPrimo(x)}`);
  }
}*/
