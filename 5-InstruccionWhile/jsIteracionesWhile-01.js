/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	
	let control = 1; /* declaracion de inicializacion de la variable de control */
	let mensaje = "";

	while (control <= 10) {/* variable de control, es la que controla la cantidad de repeticiones (el bucle), 
		es la usada en la condición*/
		mensaje = mensaje + control + "";// modificacion de la variable de control 
		console.log (control)
		control ++;
	}
	alert(mensaje);
}