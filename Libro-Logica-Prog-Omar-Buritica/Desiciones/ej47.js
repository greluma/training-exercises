/**
 * *47.	Leer dos números enteros y si la diferencia entre los dos números es par mostrar en pantalla la suma de los dígitos de los números, si dicha diferencia es un número primo menor que 10 entonces mostrar en pantalla el producto de los dos números y si la diferencia entre ellos terminar en 4 mostrar en pantalla todos los dígitos por separado.
 */

let num1 = 30;
let num2 = 16;
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

const listDigs = (num) => {
  let listaAux = [];
  let aux = num;
  while (aux != 0) {
    listaAux.push(aux % 10);
    aux = Math.trunc(aux / 10);
  }
  return listaAux.reverse();
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

if (dif % 2 == 0) {
  let listaAux = [];
  lista.forEach((element) => {
    listaAux = listaAux.concat(listDigs(element));
  });
  let cont = 0;
  listaAux.forEach((element) => {
    cont += element;
  });
  //   console.log(listDigs(lista[0]));
  //   listaAux = listaAux.concat(listDigs(lista[0]));
  // console.log(listaAux);
  console.log(
    `La diferencia entre ${lista[0]} y ${lista[1]} es de ${dif} por tanto es par, la suma de los digitos de los 2 numeros es ${cont}`
  );
}
if (esPrimo(dif) && dif < 10) {
  let producto = () => {
    let cont = 1;
    console.log(lista);
    lista.forEach((element) => {
      cont = cont * element;
    });
    return cont;
  };
  console.log(
    `La diferencia entre ${lista[0]} y ${
      lista[1]
    } es de ${dif}, numero primo y menor que 10 x tanto el producto de ambos numeros es ${producto()}`
  );
}
if (dif % 10 == 4) {
  let listaAux = [];
  lista.forEach((element) => {
    listaAux = listaAux.concat(listDigs(element));
  });
  console.log(listaAux);
  console.log(
    `La diferencia entre ${lista[0]} y ${lista[1]} es de ${dif}, termina en 4. Por tanto ahora mostrare todos los digitos ${listaAux}`
  );
}
