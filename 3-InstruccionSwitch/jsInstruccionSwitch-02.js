function mostrar()
{
	//tomo el mes
	
		//tomo el mes
	let mes;
	mes = document.getElementById ("txtIdMes").value;
	
	
	switch (mes){
		case "Enero":
	    case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert ("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		default:
			alert("Felices fiestas!!");
			break;
	}
		
	}
	/* if (mes == "Enero" || mes == "Febrero" || mes == "Marzo" || mes == "Abril" || mes =="Mayo" || mes == "Junio") {
			alert ("ya viene el invierno")}
		  else if (mes == "Julio" || mes == "Agosto"){
			  alert ("abrigate hace frio")}
			esle {
				alert("ya viene el calor")} */
	
//FIN DE LA FUNCIÓN