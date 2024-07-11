/*

7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande



*/

const numero1 =parseInt(prompt("ingrese el primer numero "));
const numero2 =parseInt(prompt("ingrese el segundo numero "));
const numero3 =parseInt(prompt("ingrese el tercer numero "));

if(numero1>numero2 && numero1>numero3){

document.write("el mayor es el numero :"+numero1);

}else{

    if(numero2>numero1 && numero2>numero3){
        document.write("el mayor es el numero :"+numero2);
    
    }else{
        if(numero3>numero1 && numero3>numero2){
            document.write("el mayor es el numero :"+numero3);
        
        }else{
        document.write("los numeros son iguales :"+numero3);
        }
    }


} 
