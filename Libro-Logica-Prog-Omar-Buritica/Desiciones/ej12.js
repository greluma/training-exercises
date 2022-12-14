const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
};
let num1 = 123456789,
  num2 = 87654321;
let list1 = listDigs(num1);
let list2 = listDigs(num2);
// console.log(list1);
// console.log(list2);

let listComun = [];
for (const numLis1 of list1) {
  for (const numLis2 of list2) {
    if (numLis1 == numLis2) {
      if (listComun.indexOf(numLis1) == -1) {
        listComun.push(numLis1);
      }
    }
  }
}

console.log(`Los numeros que se repiten en ${num1} y ${num2} son ${listComun}`);
