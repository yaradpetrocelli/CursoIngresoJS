function mostrar()
{
	//tomo la hora
	let hora;
	hora = ParseInt(document.getElementById ("txtIdHora").value);


	switch (hora){
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de manana");
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			alert("Esde tarde");
			break;
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
		case "6":
		case "5":
		case "4":
		case "3":
		case "2":
		case "1":
		case "0":
			alert("Es de noche");
			break;
		default:
			alert("no existe la hora")

		
	default

	}

}//FIN DE LA FUNCIÓN