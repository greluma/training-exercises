const serieFiboanchi = (fin) => {
  let aux1 = 0;
  let aux2 = 1;
  let cond = true;
  let resp = [aux1, aux2];
  let cont = 0;

  while (cond) {
    cont = aux1 + aux2;
    if (cont >= fin) {
      cond = false;
    } else {
      resp.push(cont);
      aux1 = aux2;
      aux2 = cont;
    }
  }
  return resp;
};

//* 41
console.log(serieFiboanchi(100));
let cont = 0;
serieFiboanchi(100).forEach((element) => {
  cont += element;
});
console.log(cont);

//* 42

console.log(serieFiboanchi(1000));
let cont1 = 0;
serieFiboanchi(1000).forEach((element) => {
  cont1 += element;
});
// console.log(Math.trunc(cont1 / serieFiboanchi(1000).length));
console.log(cont1);
console.log(cont1 / serieFiboanchi(1000).length);
