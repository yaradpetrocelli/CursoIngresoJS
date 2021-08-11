/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 1;

	do {
		numero = parseInt(prompt("ingrese un numero"));

		while (isNaN (numero)){
			numero = parseInt(prompt("ingrese un numero valido"));}
	
	if (flag || numero > maximo) {
		maximo = numero;}
    if ( flag || numero < minimo) {
		minimo = numero;
		flag = 0;
	}
	
	

		seguir = prompt ("quiere seguir ingresando numeros?").toLowerCase()
	} while (seguir == 's');
	
	document.getElementById ("txtIdMaximo").value = maximo
	document.getElementById ("txtIdMinimo").value = minimo
	}
