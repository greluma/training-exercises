let num1 = 24;
let num2 = 69;
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
console.log(lista);
console.log(dif);
