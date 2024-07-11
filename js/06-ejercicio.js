/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande



*/

const numero1 =parseInt(prompt("ingrese el primer numero "));
const numero2 =parseInt(prompt("ingrese el segundo numero "));


if(numero1>numero2){

document.write("El numero mas grande es el : "+numero1);
console.log("El numero mas grande es el : "+numero1);


}else{
    document.write("El numero mas grande es el : "+numero2);
    console.log("El numero mas grande es el : "+numero2);
}
