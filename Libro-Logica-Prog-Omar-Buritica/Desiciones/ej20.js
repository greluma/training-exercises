//mal

let num1 = 6;
let num2 = 3;
let num3 = 1;

let lista = [];
let lista2 = [];
lista.push(num1, num2, num3);

let cont = 0;
for (const iterator of lista) {
  cont = iterator;
  if (iterator > cont) {
    lista2.push(iterator[lista2.length - 1]);
  }
}

console.log(lista2);
