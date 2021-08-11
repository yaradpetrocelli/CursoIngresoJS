/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo = prompt ("ingrese el sexo").toLowerCase();


while (sexo != "f" && sexo != 'm'){
    
 sexo = prompt ("ingrese un sexo valido").toLowerCase();
}

alert("Ingresaste " + sexo);
}