/**
 ** 3.	Leer un número entero y mostrar todos los divisores exactos del número comprendidos entre 1 y el número leído.
 */
let comprendidos = (numero) => {
  let lista = [];
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      lista.push(i);
    }
  }
  return lista;
};

console.log(comprendidos(24));
