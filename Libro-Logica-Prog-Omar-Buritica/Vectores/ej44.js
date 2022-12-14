const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

const serieFiboanchi = (fin) => {
  let aux1 = 0;
  let aux2 = 1;
  let cond = true;
  let resp = [aux1, aux2];
  let cont = 0;

  while (cond) {
    cont = aux1 + aux2;
    if (resp.length == fin) {
      cond = false;
    } else {
      resp.push(cont);
      aux1 = aux2;
      aux2 = cont;
    }
  }
  return resp;
};

console.log(serieFiboanchi(12));
// console.log(serieFiboanchi(100).length);
// console.log(vector.indexOf(100));

let resp = [];
serieFiboanchi(12).forEach((fibo) => {
  vector.forEach((element) => {
    if (fibo == element && resp.indexOf(element) == -1) {
      resp.push(element);
    }
  });
});

console.log(resp);
