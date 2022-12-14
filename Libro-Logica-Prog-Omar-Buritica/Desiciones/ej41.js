let num1 = 15;
let num2 = 7;
let lista = [];
let dif = 0;
const diferencia = (a, b) => {
  if (a == b) {
    console.log(`Los números son iguales`);
  } else {
    if (a > b) {
      lista.push(a, b);
    } else {
      lista.push(b, a);
    }
    dif += lista[0] - lista[1];
  }
};

diferencia(num1, num2);
console.log(dif);

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

esPrimo(dif)
  ? console.log(`${dif} ES Primo`)
  : console.log(`${dif} NO es Primo`);
