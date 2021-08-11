function mostrar()
{
let primos;
let numero;
numero = parseInt(prompt("ingrese numero"));

while(isNaN(numero) || numero <= 0){
	numero = parseInt(prompt("ingrese numero valido"));
}
for (let i = 2; i < numero; i++){
	if (numero % 1 == 0){
		primos++
	}
}

if (primos == 0){
	console.log(numero + "es primo")
}else{
	console.log (numero + "no es primo")
}



}