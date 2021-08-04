/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
let seguir;
let numero;
let promedio;
let acumulador = 0;
let contador = 0;

do {
	numero = prompt ("Ingrese el numero")
	acumulador = numero + acumulador
	contador++
	seguir = prompt("Quiere que lo vuelva a saludar?");
}while (seguir == 's');

promedio = acumulador / numero

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}