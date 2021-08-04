function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
let max=1;
let min=10;
let numero;	

numero = Math.floor(Math.random()*(max - min + 1)+ min);
//numero = Math.floor(Math.random()*10+1) 
alert (numero)

if (numero > 8) {
	alert ("Excelente");}
else if (numero < 3){
	alert ("aprobo");}
else {
	alert ("Si se puede");
}

}//FIN DE LA FUNCIÓN