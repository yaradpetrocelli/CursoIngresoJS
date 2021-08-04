/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let centigrados;

    temperatura = parseInt(document.getElementById ("txtIdTemperatura").value);

    centigrados = (temperatura - 32) * 5/9

    alert(centigrados)
	
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let fahrenheit;

    temperatura = parseInt(document.getElementById ("txtIdTemperatura").value);

    fahrenheit = (temperatura * 1.8) + 32

    alert(fahrenheit)
	
}
