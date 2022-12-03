let num = 986;
let primD, segD, tercD, sumatoria;
primD = Math.round(num / 100 - (num % 100) / 100);
tercD = num % 10;
segD = Math.round((num % 100) / 10 - tercD / 10);
console.log(primD);
console.log(segD);
console.log(tercD);

sumatoria = primD + segD + tercD;
console.log(sumatoria);
