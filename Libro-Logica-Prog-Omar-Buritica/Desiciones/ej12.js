//mal

let num1 = 87;
let num2 = 45;

let list1 = [],
  list2 = [],
  validar = [];

const dosDigitos = (num) => {
  if (num < 10 || num > 99) return false;
  else return true;
};

validar.push(num1);
validar.push(num2);
console.log(validar.length);

for (const iterator of validar) {
  if (!dosDigitos(iterator)) {
    console.log(`${iterator} no es valido`);
  } else {
    list1.push(Math.round(iterator / 10 - (iterator % 10) / 10));
    list1.push(iterator % 10);
  }
}

console.log(list1);
for (const iterator of list1) {
  list2.push(iterator);
  for (const iterator2 of list2) {
    if (list2[list2.length - 1] == iterator) {
      console.log(`Num ${iterator} se repite`);
    }
  }
}

console.log(list2);
console.log(list2[list2.length - 1]);
