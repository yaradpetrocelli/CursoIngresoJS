/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let ancho;
let largo;
let cantidad;
let alambre;

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

cantidad = largo * ancho;
alambre = cantidad * 3;

alert (alambre);


}
function Circulo () 
{
   
    let radio;
    let cantidad;
    let alambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    
    cantidad = 2 * radio

    alambre = cantidad * 3

    alert (alambre)

	
}
function Materiales () 
{
	let arena;
    let cemento;
    let ancho; 
    let largo;
    let rectangulo;


    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    
    rectangulo = ancho * largo;

    arena = rectangulo * 2;

   cemento = rectangulo * 3;

    alert("Se necesitan  " + arena + " bolsas de arena " + cemento + "bolsas de cemento");
    
    
}