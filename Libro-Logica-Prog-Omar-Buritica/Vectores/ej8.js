const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

let indices = [];
vector.forEach((element) => {
  if (element % 10 == 4) {
    indices.push(vector.indexOf(element));
  }
});

console.log(indices);
