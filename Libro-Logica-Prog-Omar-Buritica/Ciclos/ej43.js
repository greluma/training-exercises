const serieFiboanchi = (fin) => {
  let aux1 = 0;
  let aux2 = 1;
  let cond = true;
  let resp = [];
  let cont = 0;

  while (cond) {
    cont = aux1 + aux2;
    if (cont >= fin) {
      cond = false;
    } else {
      aux1 = aux2;
      aux2 = cont;
      if (cont >= 1000) {
        resp.push(cont);
      }
    }
  }
  return resp;
};

console.log(serieFiboanchi(2000));
