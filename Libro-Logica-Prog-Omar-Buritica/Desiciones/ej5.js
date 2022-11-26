let num = 45;
let primD = Math.trunc(num / 10);
let segD = num % 10;
if (primD % 2 == 0 && segD % 2 == 0) {
  console.log("Ambos son pares");
} else {
  if (primD % 2 != 0) {
    console.log(`${primD} no es par`);
  }
  if (segD % 2 != 0) {
    console.log(`${segD} no es par`);
  }
}

console.log(primD);
console.log(segD);
