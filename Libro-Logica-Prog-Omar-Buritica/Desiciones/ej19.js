let num1 = 6;
let num2 = 3;
let num3 = 1;

let lista = [];
lista.push(num1, num2, num3);

let cont = 0;
for (const iterator of lista) {
  if (iterator > cont) {
    cont = iterator;
  }
}

console.log(cont);
