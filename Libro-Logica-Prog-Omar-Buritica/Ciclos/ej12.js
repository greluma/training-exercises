let num = 5231234345;
let aux = 0;
while (num != 0) {
  aux = num % 10;
  console.log(aux);
  num = Math.trunc(num / 10);
  if (num == 0 && aux != 1) {
    console.log("No tienen el # 1");
  }
  console.log(num);
  if (aux == 1) {
    console.log("Tienen el # 1");
    num = 0;
  }
}
