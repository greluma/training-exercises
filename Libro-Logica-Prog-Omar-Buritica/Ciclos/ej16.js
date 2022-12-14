let numUsu = 64;
let primeros = 100;

let lista = [];
cond = true;
for (let i = 1; cond; i++) {
  if (lista.length != primeros && i != numUsu) {
    if (i % 3 == 0) {
      lista.push(i);
    }
  } else {
    cond = false;
  }
}

console.log(lista);
console.log(lista.length);

let cont = 0;
lista.forEach((element) => {
  cont += element;
});

console.log(cont);
console.log(Math.trunc(cont / lista.length));
