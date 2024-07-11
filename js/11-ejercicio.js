/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
(hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
     
 */


// HECHO CON CHAT GPT 


// Función para determinar si un número es divisible por otro número
function esDivisible(numero, divisor) {
    return numero % divisor === 0;
}

// Función para obtener los divisores de un número dado
function obtenerDivisores(numero) {
    let divisores = [];
    
    if (esDivisible(numero, 2)) {
        divisores.push(2);
    }
    if (esDivisible(numero, 3)) {
        divisores.push(3);
    }
    if (esDivisible(numero, 5)) {
        divisores.push(5);
    }
    if (esDivisible(numero, 7)) {
        divisores.push(7);
    }

    return divisores;
}

// Función principal para pedir el número al usuario y mostrar los divisores
function main() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Debe ingresar un número entero positivo válido.");
        return;
    }

    let divisores = obtenerDivisores(numero);

    if (divisores.length === 0) {
        alert(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
    } else {
        let mensaje = `El ${numero} es divisible por `;
        for (let i = 0; i < divisores.length; i++) {
            mensaje += divisores[i];
            if (i < divisores.length - 1) {
                mensaje += ", ";
            } else {
                mensaje += ".";
            }
        }
        alert(mensaje);
    }
}

// Llamar a la función principal para ejecutar el programa
main();