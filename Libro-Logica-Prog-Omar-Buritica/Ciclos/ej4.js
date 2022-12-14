/**
 * *4.	Leer dos números y mostrar todos los enteros comprendidos entre ellos.
 */

let listNum = [1, 20];
const mayor = (a, b) => {
  listNum = [];
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

listNum = mayor(listNum[0], listNum[1]).reverse();
console.log(listNum);

for (let i = listNum[0] + 1; i < listNum[1]; i++) {
  console.log(i);
}
for (let i = listNum[0] + 1; i < listNum[1]; i++) {
  if (i % 10 == 4) {
    console.log(i);
  }
}
