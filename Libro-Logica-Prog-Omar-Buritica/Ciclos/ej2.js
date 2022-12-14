/**
 * 2.	Leer un número entero y mostrar todos los pares comprendidos entre 1 y el número leído.
 */
let comprendidos = (numero) => {
  let lista = [];
  for (let i = 2; i < numero; i++) {
    if (i % 2 == 0) {
      lista.push(i);
    }
  }
  return lista;
};

console.log(comprendidos(25));
