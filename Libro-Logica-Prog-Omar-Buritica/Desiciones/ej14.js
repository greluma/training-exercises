let num1 = 23;
let num2 = 19;
let list = [],
  sumatoria = 0;
list.push(num1);
list.push(num2);

for (const iterator of list) {
  sumatoria += (iterator % 10) + (iterator / 10 - (iterator % 10) / 10);
}

console.log(list);
console.log(sumatoria);
