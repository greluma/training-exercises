let listaNum = [];
let cond = true;
while (cond) {
  let num = Math.ceil(Math.random() * 100);
  if (num != 1) {
    listaNum.push(num);
  } else {
    cond = false;
  }
}

console.log(listaNum);
console.log(listaNum.length);

let sumatoria = 0,
  cont = 0;
listaNum.forEach((element) => {
  if (element % 10 == 5) {
    sumatoria += element;
    cont++;
  }
});

console.log(sumatoria);
console.log(cont);
console.log(sumatoria / cont);
