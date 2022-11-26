let num = 39;
let primD = Math.trunc(num / 10);
let segD = num % 10;

console.log(primD);
console.log(segD);
if (primD == segD) {
  console.log("Son Iguales");
} else if (primD % segD == 0) {
  console.log(`${primD} es multiplo de ${segD}`);
} else if (segD % primD == 0) {
  console.log(`${segD} es multiplo de ${primD}`);
} else {
  console.log("ninguno es multipo del otro");
}
