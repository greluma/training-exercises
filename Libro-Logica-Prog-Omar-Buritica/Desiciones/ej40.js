let num1 = 1;
let num2 = 6;
let lista = [];
function diferencia(lista) {
  return lista[0] - lista[1];
}
if (num1 == num2) {
  console.log(`Los números son iguales`);
} else {
  if (num1 > num2) {
    lista.push(num1, num2);
  } else {
    lista.push(num2, num1);
  }
  let res = diferencia(lista);
  console.log(res);
  if (res <= 10) {
    for (let i = lista[1] + 1; i != lista[0]; i++) {
      console.log(i);
    }
  } else {
    console.log(`La diferencia es mayor que 10: ${res}`);
  }
}
console.log(lista);
