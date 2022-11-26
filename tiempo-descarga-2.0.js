let tamannoArchivo = 2,
  unidadArchivo = "gb";
let velocidaDescarga = 200,
  unidadDescarga = "kb";
let tiempoSegundos, resultado;

function tiempo_demora() {
  if (unidadArchivo == "gb") {
    tamannoArchivo = tamannoArchivo * 1048576;
  } else if (unidadArchivo == "mg") {
    tamannoArchivo = tamannoArchivo * 1024;
  }
  if (unidadDescarga == "gb") {
    velocidaDescarga = velocidaDescarga * 1048576;
  } else if (unidadDescarga == "mg") {
    velocidaDescarga = velocidaDescarga * 1024;
  }
  tiempoSegundos = tamannoArchivo / velocidaDescarga;
}

tiempo_demora();

function funResultado() {
  if (tiempoSegundos < 60) {
    resultado = tiempoSegundos + " segundos";
  } else if (tiempoSegundos >= 60 && tiempoSegundos < 3600) {
    tiempoSegundos = tiempoSegundos / 60;
    resultado = tiempoSegundos + " minutos";
  } else if (tiempoSegundos >= 3600) {
    tiempoSegundos = tiempoSegundos / 60 / 60;
    resultado = tiempoSegundos + " horas";
  }
}

funResultado();

console.log(resultado);
