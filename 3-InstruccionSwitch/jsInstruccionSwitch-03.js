function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById ("txtIdMes").value;
	
	
	switch (mes){

	    case "Febrero":
			alert ("Tiene 28 dias");
			break;
			case "Abril":
				case "Junio":
					case "noviembre":
						alert ("Tiene 30 dias");
						break;
						default:
							alert("Tiene 31 dias");
							break;}
							/* if (mes=="Febrero"){
								alert ("Tiene 28 dias")}
								else{
									alert ("este mes tiene 30 o mas dias")}
									
									
									
									case "Septiembre":

									//alt flecha hacia arriba o hacia abajo
	
}//FIN DE LA FUNCIÓN