/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2.
 */

const numero1 =parseInt(prompt("ingrese un numero "));


if(numero1%2==0){

document.write("el numero es divisible por 2");
console.log("El numero es divisible por 2");


}else{

 if(numero1%3==0){

    document.write("el numero es divisible por 3");
    console.log("El numero es divisible por 3");
    

 }else{

    if(numero1%5==0){

        document.write("el numero es divisible por 5");
        console.log("El numero es divisible por 5");

    }else{
       if(numero1%7==0){

        document.write("el numero es divisible por 7");
        console.log("El numero es divisible por 7");

       }else{

        document.write("el numero no es divisible por ningun numero dado");
        console.log("el numero no es divisible por ningun numero dado");

       }



    }



 }



}