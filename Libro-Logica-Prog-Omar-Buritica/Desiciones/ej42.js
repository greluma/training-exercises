let num1 = 16;
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

dif % 2 == 0 ? console.log(`${dif} ES Par`) : console.log(`${dif} NO es Par`);
