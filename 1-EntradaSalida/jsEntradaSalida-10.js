/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let importe;
let importefinal;
let descuento;
let descuentoFinal;
//let mensaje;

importe = parseInt (document.getElementById("txtIdImporte").value);

descuento =parseFloat(prompt("Ingrese el descuento"));

importefinal = importe - descuento;
descuentoFinal= importe*importefinal/100;
//mensaje = ("Importe "+importe+("con descuento")+descuento);

document.getElementById("txtIdResultado").value = descuentoFinal;
}
