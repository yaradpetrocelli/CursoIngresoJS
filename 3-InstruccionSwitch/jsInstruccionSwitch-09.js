function mostrar()
{
let precio = 15000;
let estacion;
let destino;
let PrecioFinal;

estacion = document.getElementById ("txtIdEstacion").value;
destino = document.getElementById ("txtIdDestino").value;

console.log (estacion);
console.log (destino);

switch (destino){
	case "Bariloche":
		if (estacion == "Invierno") {
			PrecioFinal= precio + precio * .20;}

	    else if (estacion == "Verano"){
			PrecioFinal = precio - precio * .2;}
		else {
			PrecioFinal = precio + precio * .1;}
		break;
	case "Mar del plata":
		if (estacion == "Invierno") {
			PrecioFinal = precio - precio * .1;
		}
	    else if (estacion == "Verano") {
			PrecioFinal = precio + precio * .2;}
		else {
		    PrecioFinal = precio + precio * .1;}
		break;
		
	case"Cordoba":
	if (estacion == "Invierno"){
		PrecioFinal = precio + precio * .1;}
	else if (estacion == "Verano"){
		PrecioFinal = precio + precio * .1}
	else {
		PrecioFinal == precio 
	}
	
	break;
	case "Cataratas":
		if (estacion == "Invierno"){
			PrecioFinal = precio + precio * .1;}
		else if (estacion == "Verano"){
			PrecioFinal = precio + precio * .1}
	    else {
			PrecioFinal == precio + precio *.1
		}
		
		break;

}
alert ("El precio a pagar es: " + PrecioFinal);

}

/*switch(estacion) {
	case "Invierno":
		if (destino == "Bariloche") {
			PrecioFinal= precio + precio * .20;}

	    else if (destino == "Mar de plata"){
			PrecioFinal = precio - precio * .2;}
		else {
			PrecioFinal = precio - precio * .1;}
		break;
	case "Verano":
		if (destino == "Bariloche") {
			PrecioFinal = precio + precio * .2;
		}
	    else if (destino == "Mar de plata") {
			PrecioFinal = precio + precio * .2;}
		else {
		    PrecioFinal = precio + precio * .1;}
		break;
		
	case"Otono":
	case "Primavera":
		if (destino == "Bariloche" || destino == "Mar de Plata" || destino == "Cataratas"){
			PrecioFinal = precio + precio * .1;}
		else{
			PrecioFinal = precio
		}
		break;

}
alert ("El precio a pagar es: " + PrecioFinal);*/



 //fin