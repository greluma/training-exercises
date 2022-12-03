let num = 44;
if (num < 10 || num > 99) {
  console.log("Numero invalido");
} else {
  let segD = num % 10;
  let primD = Math.round(num / 10 - segD / 10);
  console.log(primD);
  console.log(segD);
  if (primD == segD) {
    console.log("Son iguales");
  } else {
    console.log("Son diferentes");
  }
}
