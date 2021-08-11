
function mostrar()
{
	let tipo;
	let cantidad;
	let precio;
	let marca;
	let fabricante;
	let precioMinAl;
	let canAlBarato;
	let fabriAlBarato;
	let contadorA = 0;
	let contadorB = 0;
	let contadorJ = 0;
	let maxUnidades;
	let promedio;
	let acumA = 0;
	let acumB = 0;
	let acumJ = 0;
	let flagA = 1;

	for (let i = 0; i < 5; i++){
		tipo = prompt("Ingrese el tipo: barbijo/jabon/alcohol").toLowerCase();
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt("ERROR: Ingrese el tipo valido: barbijo / jabon / alcohol").toLowerCase();
		}
	    precio = parseInt(prompt("Ingrese el precio entre 100 y 300"));
		while (isNaN (precio) || precio < 100 || precio > 300){
			precio = parseInt(prompt("ERROR Ingrese el precio valido entre 100 y 300"));
		}
		cantidad = parseInt(prompt("Ingrese la cantidad, no puede ser 0 ni superar las 1000 unidades"));
		while (isNaN (cantidad) || cantidad < 0 || cantidad > 1000){
			cantidad = parseInt(prompt("Ingrese la cantidad, no puede ser 0 ni superar las 1000 unidades"));
		}
		marca = prompt("Ingrese la marca").toLowerCase();
		while(marca.length == 0){
			marca = prompt("ERROR Ingrese una marca valida").toLowerCase();
		}
		fabricante = prompt("Ingrese el fabricante").toLowerCase();
		while(fabricante.length == 0){
			marca = prompt("ERROR Ingrese un fabricante valido").toLowerCase();
		}
	
	if (tipo == "barbijo"){
		acumB = acumB + cantidad;
		contadorB++;
		
	}else if (tipo == "alcohol"){
		acumA = acumA + cantidad;
		contadorA++;
		if (flagA || precio < precioMinAl){
			precioMinAl = precio;
			fabriAlBarato = fabricante;
			canAlBarato = cantidad;
			flagA = 0;
		}
	}else{
		acumJ = acumJ + cantidad;
		contadorJ++
	}
}
if (acumJ > acumA && acumJ > acumB){
maxUnidades = "jabon";
promedio = acumJ / contadorJ;
}
else if (acumA >= acumJ && acumA > acumB) {
	maxUnidades = "Alcohol";
	promedio = acumA / contadorA;
}
else {
	maxUnidades = "Barbijos";
	promedio = acumB / contadorB;
}
document.write ("precio alcohol barato " + precioMinAl + "fabricante " + fabriAlBarato + "cantidad "+ canAlBarato + "<br>")
document.write ("tipo con mas unidades " + maxUnidades + "promedio " + promedio + "<br>")
document.write ("cantidad de jabones " + acumJ + "<br>")
}

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

/* estrategia

1- declarar variables> tipo, cantidad, precio, marca, fabricante (esto se lo pedimos al usuario)
a) precioMinAl / conAlBarato/ fabriAlBarato
b) contadordAl / contadorBar / contadorJ / maxUnidades / promedio / acumA / acumB / acumJ / promedio>
c) acumJ

2-generar un bucle que se repita 5 veces (for, porque se sabe las veces que se tiene que repetir)
3-cosas que se tienen que hacer 5 veces (van dentro del bucle)
 3.1-pido tipo y valido
 3.2- pido precio y valido
 3.3- pido cantidad y valido
 3.4- pido marca
 3.5- pido fabricante

 a) me fijo si el producto es alcohol y si es asi la primera vez que ingresa alcohol guardo el precio en precioMinAl 
 y las siguientes veces que ingrese un alcohol lo comparo con el precio de alchol barato y si es mas barato lo actualizo
 (tambien guardo cantidad y fabricante)
 b)me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo.
 c) si es de tipo jabon acumulo la cantidad (se hizo en el punto b
	
4- cosas que hago despues del for:
4.1- me tengo que fijar cual es el mayor acumulador y sacar el promdedio para ese tipo

4.2- muestro los resultados


*/
