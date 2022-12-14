const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

//* Menor
let men = 10000000000000;
vector.forEach((element) => {
  if (element < men) {
    men = element;
  }
});
console.log(men);

//* Mayor
let may = 0;
vector.forEach((element) => {
  if (element > may) {
    may = element;
  }
});
console.log(may);
