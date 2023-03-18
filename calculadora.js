function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

let primerValor = parseInt(prompt("inserte un numero"));
let segundoValor = parseInt(prompt("inserte otro numero"));
let eligeOp = parseInt(
  prompt(
    "Elija la operacion que desea hacer \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.Division"
  )
);

let eligioOp = false;

while (eligioOp === false) {
  if (eligeOp === 1) {
    alert("El resultado es " + sumar(primerValor, segundoValor));
    eligioOp = true
  } else if (eligeOp === 2) {
    alert("El resultado es " + restar(primerValor, segundoValor));
    eligioOp = true
  } else if (eligeOp === 3) {
    alert("El resultado es " + multiplicar(primerValor, segundoValor));
    eligioOp = true
  } else if (eligeOp === 4) {
    alert("El resultado es " + dividir(primerValor, segundoValor));
    eligioOp = true
  } else {
    eligeOp = parseInt(
      prompt(
        "Por favor elija UNA de las opciones \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.Division"
      )
    );
  }
}
