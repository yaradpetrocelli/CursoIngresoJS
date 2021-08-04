/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let lamparas;
    let marca;
    let precio = 35;
    let importeFinal;
    let ibb;

    marca = document.getElementById ("Marca").value;
    lamparas = document.getElementById ("txtIdCantidad").value;
    

    switch (marca) {
        case "ArgentinaLuz":
            if (lamparas >= 6){
                precio = precio - precio * 0.5
                document.getElementById ("txtIdprecioDescuento").value = precio
            } 
            else if (lamparas == 5) {
                precio = precio - precio * 0.40
                document.getElementById ("txtIdprecioDescuento").value = precio
            }
            else if (lamparas == 4) {
                precio = precio - precio * 0.35
                document.getElementById ("txtIdprecioDescuento").value = precio
            }
            else if (lamparas == 3) {
                precio = precio - precio * 0.15
                document.getElementById ("txtIdprecioDescuento").value = precio}
            else {
                document.getElementById ("txtIdprecioDescuento").value = precio
            }
            break;
        case "FelipeLamparas":
            if (lamparas >= 6){
                precio = precio - precio * 0.5
                document.getElementById ("txtIdprecioDescuento").value = precio
            } 
            else if (lamparas == 5) {
                precio = precio - precio * 0.30
                document.getElementById ("txtIdprecioDescuento").value = precio
            }
            else if (lamparas == 4) {
                precio = precio - precio * 0.20
                document.getElementById ("txtIdprecioDescuento").value = precio
            }
            else if (lamparas == 3) {
                precio = precio - precio * 0.10
                document.getElementById ("txtIdprecioDescuento").value = precio}
            else {
                document.getElementById ("txtIdprecioDescuento").value = precio}
            break;
            case "JeLuz":
            case "HazIluminacion":
            case "Osram":
                if (lamparas >= 6){
                    precio = precio - precio * 0.5
                    document.getElementById ("txtIdprecioDescuento").value = precio
                } 
                else if (lamparas == 5) {
                    precio = precio - precio * 0.30
                    document.getElementById ("txtIdprecioDescuento").value = precio
                }
                else if (lamparas == 4) {
                    precio = precio - precio * 0.20
                    document.getElementById ("txtIdprecioDescuento").value = precio
                }
                else if (lamparas == 3) {
                    precio = precio - precio * 0.05
                    document.getElementById ("txtIdprecioDescuento").value = precio}
                else {
                    document.getElementById ("txtIdprecioDescuento").value = precio}
                break;
               }
               importeFinal = precio * lamparas
               if (importeFinal > 120) {
                   ibb = importeFinal * 0.1
                   alert ("Tienes que pagar")
               }


            }

       
            
       
           
 	
