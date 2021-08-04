function mostrar()
{

let estacion;
let destino;
//let flag=1; ---> viaja

estacion = document.getElementById ("txtIdEstacion").value;
destino = document.getElementById ("txtIdDestino").value;

console.log (estacion);
console.log (destino);

switch (destino){
	case "Invierno":
		if (destino == "Bariloche") {
			alert("Se viaja");}
			// flag = 0 -----> no viaja. Se pone esta variable y se pone un alert al final
		else {
			alert("No se viaja");}
		break;
	case "Verano":
		if (destino == "Cataratas" || destino == "Mar del plata") {
			alert("Se viaja");
		}
	    else {
			alert("no se viaja")
			// flag = 0
		}
		break;
		
	case"Otono":
		alert ("Se viaja"); 
	break;
	case "Primavera":
		if (estacion != "Bariloche"){
			alert ("no se viaja");}
	    else {
			alert("Se viaja")
			//flag = 0
		}
		
		break;
 // if (flag=0){
// alert ("no se viaja")	 
 //}

}

}