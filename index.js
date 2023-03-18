class Ropa {
  constructor(tipo, id, precio) {
    this.tipo = tipo;
    this.id = id;
    this.precio = precio;
  }
}

const Pantalon = new Ropa("Pantalon", 1, 5000);
const Remera = new Ropa("Remera", 2, 3000);
const Camisa = new Ropa("Camisa", 3, 6000);

let cantidadRopa;
let infoRopaElegida = parseInt(
  prompt("Hola! Te gustaría elegir entre 1.Pantalon - 2.Remera - 3.Camisa?")
);
if (infoRopaElegida > 0 && infoRopaElegida < 4) {
  cantidadRopa = parseInt(prompt("Cuántas prendas desea agregar?"));
}
let eligioRopa = false;

while (eligioRopa === false) {
  if (infoRopaElegida === 1) {
    eligioRopa = true;
    infoRopaElegida = Pantalon;
  } else if (infoRopaElegida === 2) {
    eligioRopa = true;
    infoRopaElegida = Remera;
  } else if (infoRopaElegida === 3) {
    eligioRopa = true;
    infoRopaElegida = Camisa;
  } else {
    infoRopaElegida = parseInt(prompt("Por favor elija UN número entre 1 y 3"));
    if (infoRopaElegida > 0 && infoRopaElegida < 4) {
      cantidadRopa = parseInt(prompt("Cuántas prendas desea agregar?"));
    }
  }
  continue;
}
alert("Usted eligió: " + cantidadRopa + " " + infoRopaElegida.tipo);
console.log(cantidadRopa);
Array 
