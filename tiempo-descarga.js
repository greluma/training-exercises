let tamannoArchivo, unidadArchivo, velocidaDescarga, unidadDescarga;
//Ejemplo
(unidadArchivo = "gb"), (unidadDescarga = "kb");
(tamannoArchivo = 3), (velocidaDescarga = 250);
if (unidadArchivo == "gb") {
  tamannoArchivo = tamannoArchivo * 1048576;
} else if (tamannoArchivo == "mg") {
  tamannoArchivo = tamannoArchivo * 1024;
}
// console.log(tamannoArchivo);

if (unidadDescarga == "gb") {
  velocidaDescarga = velocidaDescarga * 1048576;
} else if (unidadDescarga == "mg") {
  velocidaDescarga = velocidaDescarga * 1024;
}
let tiempoDescarga = tamannoArchivo / velocidaDescarga / 60 / 60;
if (tiempoDescarga < 1) {
  tiempoDescarga = tiempoDescarga * 60 * 60;
  console.log(
    "El tiempo estimado de descarga es de: " + tiempoDescarga + " segundos"
  );
} else {
  console.log(
    "El tiempo estimado de descarga es de: " + tiempoDescarga + " horas"
  );
}
