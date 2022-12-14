const numUsu = 789456123;
let copNum = numUsu;
let list = [];
while (copNum != 0) {
  let mod = copNum % 10;
  copNum = Math.trunc(copNum / 10);
  if (numUsu % mod == 0 && list.indexOf(mod) == -1) {
    list.push(mod);
  }
}

console.log(list);
