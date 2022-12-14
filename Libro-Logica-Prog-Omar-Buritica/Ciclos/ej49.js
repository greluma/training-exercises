//! Hacer con 3 ciclos anidados

let cont = 0;
for (let i = 1; i <= 3; i++) {
  let aux = 1;
  for (let e = 1; e <= 3; e++) {
    cont++;
    console.log(cont + " " + i + " " + aux);
    aux++;
  }
}
