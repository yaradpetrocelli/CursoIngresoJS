function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	
	switch (destino){
	case "Bariloche":
	case "Ushuaia":
		alert("Frio");
		break;
	case "Cataratas":
	case "Mar de plata":
		alert("Calor");
		break;}


}//FIN DE LA FUNCIÓN