const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

let lista = [];
for (let i = 100; i <= 300; i++) {
  if (esPrimo(i)) {
    lista.push(i);
  }
  if (lista.length >= 10) {
    i = 300;
  }
}

console.log(lista);
