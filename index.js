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

let Carrito = new Array();
const Productos = new Array(Pantalon, Remera, Camisa);
let datoscompra = [];
function checkout(item) {
  datoscompra.push(item.tipo);
}

function SeleccionarPrenda() {
  let infoRopaElegida = parseInt(
    prompt("Hola! Elegí entre 1.Pantalón - 2.Remera - 3.Camisa")
  );
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
      infoRopaElegida = parseInt(
        prompt("Por favor elija UN número entre 1 y 3")
      );
    }
    continue;
  }
  return infoRopaElegida;
}

let ContinuarCompra = true;

while (ContinuarCompra === true) {
  infoRopaElegida = SeleccionarPrenda();
  alert(
    "Detalle prenda elegida: " +
      infoRopaElegida.tipo +
      " " +
      "$" +
      infoRopaElegida.precio
  );

  let deseacomprar = parseInt(prompt("Desea comprar? 1.Si - 2.No"));

  if (deseacomprar === 1) {
    let cantidadseleccionada = parseInt(
      prompt("Cuántas prendas desea agregar?")
    );
    let agregaralcarrito = parseInt(
      prompt(
        "Desea agregar al carrito  " +
          cantidadseleccionada +
          " " +
          infoRopaElegida.tipo + " " + "1.Confirma - 2.No"
      )
    );
    if (agregaralcarrito === 1) {
      for (let index = 0; index < cantidadseleccionada; index++) {
        Carrito.push(infoRopaElegida);
      }
    }
  } 
  let seguircompra = parseInt(prompt("Desea seguir comprando? 1.Si - 2.No"));
  if (seguircompra === 1) {
    continue;
  } else ContinuarCompra = false;
}

Carrito.forEach(checkout);
const elementCounts = {};

Carrito.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});
alert("Detalles de compra " + JSON.stringify(elementCounts));

console.log(elementCounts);


