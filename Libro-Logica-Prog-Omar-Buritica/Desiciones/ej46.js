/**
 * *46.	Leer un número entero de 2 dígitos y si terminar en 1 mostrar en pantalla su primer dígito, si termina en 2 mostrar en pantalla la suma de sus dígitos y si termina en 3 mostrar en pantalla el producto de sus dos dígitos.
 */

let num = 22;
let ultDig, primD, resp;

if (num < 10 || num > 99) {
  console.log("Numero no Valido");
} else {
  primD = Math.trunc(num / 10);
  ultDig = num % 10;
  switch (ultDig) {
    case 1:
      resp = primD;
      console.log(resp);
      break;
    case 2:
      resp = primD + ultDig;
      console.log(resp);
      break;
    case 3:
      resp = primD * ultDig;
      console.log(resp);
      break;
    default:
      resp = "No termina en 1,2,3";
      console.log(resp);
      break;
  }
}
