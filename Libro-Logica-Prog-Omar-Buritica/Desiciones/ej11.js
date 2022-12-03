function comparar(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
num1 = 12;
num2 = 13;
if (num1 == num2) {
  console.log("Son iguales");
} else {
  console.log(
    `De los #s ${num1} y ${num2} el mayor es ${comparar(num1, num2)}`
  );
}
