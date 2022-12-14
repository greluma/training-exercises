const rellVect = (tamanno) => {
  let vect = [];
  while (vect.length <= tamanno - 1) {
    vect.push(Math.trunc(Math.random() * 100));
  }
  return vect;
};
let vector = rellVect(10);
console.log(vector);

let obj = {};
vector.forEach((element) => {
  if (element % 5 == 0 && obj.element == undefined) {
    console.log(element);
    let index = vector.indexOf(element) + 1;
    obj[index] = element;
  }
});

console.log(obj);
