let listNum = [100, 800];
const mayor = (a, b) => {
  listNum = [];
  if (a == b) {
    console.log(`Los números son iguales`);
    return -1;
  } else {
    if (a > b) {
      listNum.push(a, b);
    } else {
      listNum.push(b, a);
    }
  }
  return listNum;
};

listNum = mayor(listNum[0], listNum[1]);
console.log(listNum);
