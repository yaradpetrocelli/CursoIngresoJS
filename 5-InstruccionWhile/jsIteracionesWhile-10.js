/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let respuesta;
	let acumuladorpositivo = 0;
	let contadorpositivo = 0;
	let acumuladornegativo = 0;
	let contadornegativo = 0;
	let contadorcero = 0;
	let contadorpar = 0;
	let promediopositivo = 0;
	let promedionegativo = 0;
	let diferencia;

	
	do{

		numero = parseInt(prompt("Ingrese un numero"));

			while (isNaN (numero)){
				numero = parseInt(prompt("ingrese un numero valido"));}
		
				respuesta = prompt ("Quiere seguir ingresando?").toLowerCase;
			while (respuesta != 's' && respuesta != 'n'){
				respuesta = prompt ("Ingrese si desea continuar 's' o 'n'").toLowerCase;

				}
			if (numero > 0){
				acumuladorpositivo = acumuladorpositivo + numero;
				contadorpositivo++}
			else if (numero < 0){
				acumuladornegativo = acumuladornegativo + numero;
				contadornegativo++;}
			else {
				contadorcero++}

			if (numero%2 == 0){
				contadorpar++;
			}
			
			
	
	
	}while (respuesta == 's');

	if (contadorpositivo == 0){
		promediopositivo = acumuladorpositivo / contadorpositivo;
	}

	if (contadornegativo == 0){
		promedionegativo = acumuladornegativo / contadornegativo;

	}

	diferencia = contadorpositivo - contadornegativo;

document.write("Suma de los negativos" + acumuladornegativo + "<br>")
document.write("Cantidad de positivos." + contadorpositivo + "<br>")
document.write("Cantidad de negativos." + acumuladornegativo + "<br>")
document.write("1-Suma de los negativos" + acumuladornegativo + "<br>")
document.write("1-Suma de los negativos" + acumuladornegativo + "<br>")
document.write("1-Suma de los negativos" + acumuladornegativo + "<br>")
document.write("1-Suma de los negativos" + acumuladornegativo + "<br>")


"4-Cantidad de negativos."
"5-Cantidad de ceros."
"6-Cantidad de números pares."
"7-Promedio de positivos."
"8-Promedios de negativos."
"9-Diferencia entre positivos y negativos, (positvos-negativos)"
	
	/*promediopositivo = acumuladorpositivo / contadorpositivo;
	promedionegativo = acumuladornegativo / contadornegativo;
	diferencia = contadorpositivo - contadornegativo;*/



	

	
}