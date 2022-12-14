const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 10));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

const FACTORIAL = (num) => {
  let cont = 1;
  for (let i = num; i >= 1; i--) {
    cont *= i;
  }
  return cont;
};

let vectRes = [];
vector.forEach((element) => {
  vectRes.push(FACTORIAL(element));
});

console.log(vectRes);
