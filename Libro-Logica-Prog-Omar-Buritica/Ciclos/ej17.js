let mult2 = 20;
let mult5 = 10;
const prom = (primeros, multiplo) => {
  let cont = 0;
  let lista = [];
  for (let i = 1; cont < primeros; i++) {
    if (i % multiplo == 0) {
      lista.push(i);
      cont++;
    }
  }
  cont = 0;
  lista.forEach((element) => {
    cont += element;
  });
  return cont / primeros;
};

mult2 = prom(mult2, 2);
mult5 = prom(mult5, 5);
console.log(mult2);
console.log(mult5);

const cond = mult2 > mult5;
switch (cond) {
  case true:
    console.log(`Los de 2 son mayores q los de 5`);
    break;
  case false:
    console.log(`Los de 5 son mayores q los de 2`);
    break;

  default:
    console.log(`Son iguales`);

    break;
}
