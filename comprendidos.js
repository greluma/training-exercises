let comprendidos = (numero) => {
  let lista = [];
  for (let i = 2; i < numero; i++) {
    lista.push(i);
  }
  return lista;
};

console.log(comprendidos(10));
