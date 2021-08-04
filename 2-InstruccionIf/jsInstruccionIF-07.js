function mostrar()
{
	//tomo la edad  
let edad;
let estadocivil;
edad = parseInt (document.getElementById("txtIdEdad").value)
estadocivil = document.getElementById ("estadoCivil").value

if (edad < 18 && estadocivil != "soltero"){
	alert("Es muy pequeno para NO ser soltero")
}



//FIN DE LA FUNCIÓN
}