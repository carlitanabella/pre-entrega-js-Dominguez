/* Objetivos:
-condicional
-ciclos
-funciones
*/

// Voy a hacer una calculadora de medidas de talles de ropa interior.

let talle
function operation(valor1, valor2) {
    const resultado = valor1 - valor2;
    if (resultado <= 5 ){
        return 85;
    } else if (6 >= resultado >= 10) {
        return 90;
    } else if ( 11 >= resultado >= 15 ){
        return 95;
    } else if (16 >= resultado >= 20) {
        return 100;
    } else if (21 >= resultado >= 25) {
        return 105;
    } else if (26 >= resultado >= 30){
        return 110;
    }
}



let operacion

function quierosaber() {
    while (operacion !="x" && operacion !="salir") {
        operacion = prompt(
            "Vamos a calcular primero tus medidas.\nNecesitas:\n-cinta metrica o metro.\n¿estas listo?\n-si\n-no\n-x: Salir"
        );


        operacion = operacion.toLowerCase();

        switch (operacion) {
            case "si":

            valor1 = parseInt(prompt("ingrese su medida de contorno de busto o pecho en el area de mayor volumen"));
            valor2 = parseInt(prompt("ingrese su medida de contorno de bajo busto"));
            alert("su talle de ropa inteior es " + operation(valor1, valor2));
                break;
            
            case "no":
                break;
            case "x":
                break;
            case "salir":
                break;
            default:
                alert("La operación ingresada es inválida.");
        }


    

    }
}
