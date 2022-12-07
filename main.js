let saved = "Luca";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let user = prompt("Ingresa tu Nombre. Tenés " + (i + 1) + "  Oportunidades");

    if (user === saved) {
      alert("Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error. Te quedan " + i + " intentos");
    }
  }
  return ingresar;
}


let exito = login();

if (exito) {

function cantidad1(){
    let cantidad1 = parseInt(prompt("ingresar cantidad a prestar"));
    alert("La cantidad es = " + cantidad1)
    return cantidad1
}

function cuotas1(){
    let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
    alert("Desea el prestamo en " + cuotas1 + " cuotas?")
    return cuotas1
}

let cantidad = cantidad1()
let cuotas = cuotas1()

console.log("La cantidad es: " + cantidad)
console.log("Las cuotas son:" + cuotas)

function dividir(dato1, dato2){
let resultado = dato1 / dato2;
return resultado
}

let division = dividir(cantidad, cuotas)

console.log("Usted debe pagar " + cuotas + " cuotas de " + division)


} else {
  alert("usuario no registrado");
}
alert("Gracias por operar con nosotros");