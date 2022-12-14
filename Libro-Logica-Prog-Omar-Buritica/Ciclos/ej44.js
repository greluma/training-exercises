let numUsu = 12;
const FACTORIAL = (num) => {
  let cont = 1;
  for (let i = num; i >= 1; i--) {
    cont *= i;
  }
  return cont;
};

console.log(FACTORIAL(5));
