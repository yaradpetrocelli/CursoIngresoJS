/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	//declaracion de variables 
	let numero1;
	let numero2;
	let suma;

	//levanto los datos de las cajas de texto
/*
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt (numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt (numero2);
	*/
	numero1 = parseInt (document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt (document.getElementById("txtIdNumeroDos").value);
	

	//realizo la operacion
	/* parceInt () y parseFloat () 
	funciones que convierte un numero en un string a un numero entero se usa parcenInt y con decinmales parseFloat
	se puede convertir en document y en prompt */
	//NaN = not a number
	

	suma = numero1 + numero2;

	//suma = parseInt(numero1) + parseInt(numero2) no es practico pero funciona

	//muestro resultados
	//alt+shift+f herramienta prettier para arreglar el codigo y sea legible y ordenado 
	//ctrl + o ctrl - hace zoom

	alert("La suma es " + suma);

}

