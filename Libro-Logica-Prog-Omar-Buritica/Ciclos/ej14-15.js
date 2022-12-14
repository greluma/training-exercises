let lista = [];
cond = true;
for (let i = 1; cond; i++) {
  if (lista.length != 20) {
    if (i % 3 == 0) {
      lista.push(i);
    }
  } else {
    cond = false;
  }
}

console.log(lista);
let cont = 0;
lista.forEach((element) => {
  cont += element;
});

console.log(cont);
