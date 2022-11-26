let num = 4;
let respuestaV = "Termina en 4";
let respuestaF = "No termina en 4";
if (num < 0) {
  num = num * -1;
}
if (num == 4) {
  console.log(`El # es el mismisimo ${4}`);
} else if (num % 10 == 4) {
  console.log(respuestaV);
} else {
  console.log(respuestaF);
}
