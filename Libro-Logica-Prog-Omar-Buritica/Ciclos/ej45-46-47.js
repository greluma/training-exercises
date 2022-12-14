let numUsu = 5;
const FACTORIAL = (num) => {
  let cont = 1;
  for (let i = num; i >= 1; i--) {
    cont *= i;
  }
  return cont;
};

//* 45,46,47
let list = [];
let cont = 0;
for (let i = 1; i <= numUsu; i++) {
  cont += FACTORIAL(i);
  list.push(FACTORIAL(i));
}

console.log(cont);
console.log(list);
console.log(Math.trunc(cont / list.length));
