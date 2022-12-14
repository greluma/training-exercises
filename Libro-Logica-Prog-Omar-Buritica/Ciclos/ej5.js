let num = 456;
let final = 0;
let obj = [];
while (num != 0) {
  final = num % 10;
  console.log(`Para el num ${final}`);
  for (let i = 1; i < final; i++) {
    console.log(i);
    obj.push(i);
  }
  num = Math.trunc(num / 10);
}

console.log(obj);
