const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

cont = 0;
vector.forEach((element) => {
  if (element > cont && element % 2 == 0) {
    cont = element;
  }
});
console.log(cont);
