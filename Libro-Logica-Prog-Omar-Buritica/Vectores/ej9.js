const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

let cont = 0,
  aux = 0;
vector.forEach((element) => {
  if (element > cont) {
    cont = element;
    aux = 0;
  }
  if (element == cont) {
    aux++;
  }
});
console.log(cont);
console.log(aux);
