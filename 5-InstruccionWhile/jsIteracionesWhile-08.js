/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivos = 0;
	let negativos = 1;
	let seguir;
	let flag = 0;


	do {

	    numero = parseInt (prompt ("Ingrese el numero"));
		if (numero >= 0){
			positivos = positivos + numero
		} 
		else {
			negativos  = negativos * numero
			flag = 1
		}

		seguir = prompt("Quisiera ingresar otro numero?")
	} while (seguir == 's');

	if (flag == 0){
		negativos = 0
	}

	document.getElementById("txtIdProducto").value = negativos;
	document.getElementById("txtIdSuma").value = positivos;


}