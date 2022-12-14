const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

for (let i = 32768; i > 0; i--) {
  if (esPrimo(i)) {
    console.log(i); //el numero primo mas cercano a 32768
    i = 0;
  }
}
