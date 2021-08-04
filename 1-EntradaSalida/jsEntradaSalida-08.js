/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	   let dividendo;
		let divisor;
		let SacarResto;
		
		dividendo = parseInt (document.getElementById("txtIdNumeroDividendo").value);
		divisor = parseInt (document.getElementById("txtIdNumeroDivisor").value);
	
		SacarResto = dividendo % divisor;
	
		alert("La division es " + SacarResto)
		
		
}
