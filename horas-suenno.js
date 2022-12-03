let hCantidad = 11;
let hAcostarse = 11,
  merAcostarse = "am";
let hLevantarse,
  merLevantarse = merAcostarse;

function meridianoSwitch(meridiano) {
  if (meridiano == "am") return "pm";
  else return "am";
}

hLevantarse = hAcostarse + hCantidad - 1;
if (hLevantarse >= 12) {
  hLevantarse -= 12;
  merLevantarse = meridianoSwitch(merLevantarse);
}

console.log("Introduce cuantas horas quiere dormir");
console.log("Introduce Hora Acostarse Formato 12");
console.log("Introduce Meridiano de Acostarte");
console.log(
  `Si te acuestas a las ${
    hAcostarse + merAcostarse
  } y quieres dormir ${hCantidad} horas debes levantarte a las ${
    hLevantarse + merLevantarse
  } :)`
);
