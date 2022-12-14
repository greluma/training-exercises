/**
 * *11.	Leer un número entero de dos dígitos y mostrar en pantalla todos los enteros comprendidos entre un dígito y otro.
 */
let numUsua = 96;
const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};
// console.log(listDigs(numUsua));

let lista = listDigs(numUsua);

const mayor = (a, b) => {
  let listNum = [];
  if (a == b) {
    console.log(`Los números son iguales`);
    return -1;
  } else {
    if (a > b) {
      listNum.push(a, b);
    } else {
      listNum.push(b, a);
    }
  }
  return listNum;
};

listNum = mayor(lista[0], lista[1]).reverse();

// console.log(listNum);

for (let i = listNum[0] + 1; i < listNum[1]; i++) {
  console.log(i);
}
