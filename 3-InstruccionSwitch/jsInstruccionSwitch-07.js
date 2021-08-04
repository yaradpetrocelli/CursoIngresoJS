function mostrar()
{
let destino;
destino = document.getElementById("txtIdDestino").value;

switch (destino){
	case "Bariloche":
		alert("Oeste");
		break;
	case "Cataratas":
		alert("Norte");
		break;
	case "Mar de plata":
		alert("Este");
		break;
	case "Ushuaia":
		alert("Sur");
		break;
}
/* if (destino == "Bariloche"){
	alert("oeste");}
	else if (destino == "Cataratas") {
	alert ("Norte");}
	else if (destino == "Mar de Plata") {
	alert ("Este");}
	else {
	alert ("Sur");} */


}//FIN DE LA FUNCIÓN