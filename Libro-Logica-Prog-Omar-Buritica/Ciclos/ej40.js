let num = Math.ceil(Math.random() * 100);
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

console.log(num);
console.log(serieFiboanchi(10000));
if (serieFiboanchi(10000).indexOf(num) == -1) {
  console.log(`No esta`);
} else {
  console.log(`Esta`);
}
