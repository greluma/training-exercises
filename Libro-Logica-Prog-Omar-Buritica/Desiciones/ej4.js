let num = 11;
let divInt, mod, resp;
//2.0
if (num > 9 && num < 100) {
  resp = num / 10 + (num % 10) - (num % 10) / 10;
  console.log(`La suma de sus dos digitos es: ${resp}`);
} else {
  console.log("No es un # valido");
}

//primera forma
/*if (num >= 0 && num < 100) {
  divInt = num / 10;
  mod = num % 10;
  comas = (divInt + mod) * 10;
  resp = (comas - (comas % 10)) / 10;
  console.log(`La suma de sus dos digitos es: ${resp}`);
} else {
  console.log("No es un num de 2 digitos");
}*/
