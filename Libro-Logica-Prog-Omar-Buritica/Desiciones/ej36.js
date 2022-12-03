/**
 **36.	Leer un número entero de 4 dígitos y determinar si tiene mas dígitos pares o impares
 */
let num = 777888,
  aux = num;

let lista = [];
while (aux != 0) {
  lista.push(aux % 10);
  aux = Math.trunc(aux / 10);
}

// console.log(lista);
contPares = 0;
contImpares = 0;
for (const iterator of lista) {
  if (iterator % 2 == 0) {
    ++contPares;
  } else {
    ++contImpares;
  }
}

// console.log(contPares);
// console.log(contImpares);

if (contPares > contImpares) {
  console.log(`Mas PARES: ${contPares} q impares: ${contImpares}`);
} else if (contPares < contImpares) {
  console.log(`Mas IMPARES: ${contImpares} q pares: ${contPares}`);
} else {
  console.log(
    `MISMA cantidad de IMPARES: ${contImpares} q PARES: ${contPares}`
  );
}
