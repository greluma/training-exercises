let vector = [56, 6, 34, 6, 5, 6, 78, 3];

//* Menor
const MenVect = (lista) => {
  let men = 10000000000000;
  vector.forEach((element) => {
    if (element < men) {
      men = element;
    }
  });
  return men;
};

console.log(MenVect(vector));

//* Mayor
const MayVect = (lista) => {
  let may = 0;
  vector.forEach((element) => {
    if (element > may) {
      may = element;
    }
  });
  return may;
};

console.log(MayVect(vector));

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

console.log(Math.ceil((MayVect(vector) + MenVect(vector)) / 2));
console.log(esPrimo(Math.ceil((MayVect(vector) + MenVect(vector)) / 2)));

const cond = Math.ceil((MayVect(vector) + MenVect(vector)) / 2) % 2 == 0;
console.log(cond);

//* ej39
cond ? console.log(`Es par`) : console.log(`Es impar`);
