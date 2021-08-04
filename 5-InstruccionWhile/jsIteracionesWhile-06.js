function mostrar()
{
let contador = 0;
let acumulador = 0;
let promedio;
let numero;

while (contador <= 5){
	numero = parseInt(prompt("Ingrese el numero que quiera"));
	acumulador = acumulador + numero;
	contador ++ 
}

	promedio = acumulador / 5

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}























/*
	let suma;
let promedio;
let num1;
let num2;
let num3;
let num4;
let num5;

num1 = parseInt(prompt("Ingrese el numero"));
num2 = parseInt(prompt("Ingrese el numero"));
num3 = parseInt(prompt("Ingrese el numero"));
num4 = parseInt(prompt("Ingrese el numero"));
num5 = parseInt(prompt("Ingrese el numero"));

suma= num1 + num2 +num3 +num4 +num5
promedio= suma/5

document.getElementById("txtIdSuma").value = suma
document.getElementById("txtIdPromedio").value = promedio*/


