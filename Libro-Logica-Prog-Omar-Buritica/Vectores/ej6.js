let listNum = [20, 50];
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

const esPrimo = (numero) => {
  //Casos especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  //si no se pudo dividir por ninguno de los de arriba,  si es primo
  return true;
};

listNum = mayor(listNum[0], listNum[1]);
console.log(listNum);

let lista = [];
for (let i = listNum[1]; i <= listNum[0]; i++) {
  if (esPrimo(i)) {
    lista.push(i);
  }
  if (lista.length >= 10) {
    i = listNum[0];
  }
}

console.log(lista);
