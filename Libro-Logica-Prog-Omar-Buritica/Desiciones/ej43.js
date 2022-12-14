let num1 = 9;
let num2 = 4;
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

if (lista[0] % dif == 0) {
  console.log(`${dif} es divisor exacto de ${lista[0]}`);
}
if (lista[1] % dif == 0) {
  console.log(`${dif} es divisor exacto de ${lista[1]}`);
}
if (lista[0] % dif != 0 && lista[1] % dif != 0) {
  console.log(`${dif} No es divisor exacto de ${lista[0]} ni de ${lista[1]}`);
}
