/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.


*/


const numero1 =parseInt(prompt("ingrese el primer numero "));

if(numero1%2 == 0){

document.write("el numero ingresado  "+numero1+ " es divisible en 2");
console.log("el numero ingresado  "+numero1+ " es divisible en 2");
}else{

   
    document.write("el numero ingresado  "+numero1+ " no es divisible en 2");
    console.log("el numero ingresado  "+numero1+ " no es divisible en 2");
}

