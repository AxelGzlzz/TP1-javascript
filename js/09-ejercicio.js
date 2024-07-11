/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo

*/



let frase = prompt("Introduce una frase:");


const listaVocales = 'aeiouAEIOU';


let vocales = '';


let i = 0;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;
if (i < frase.length && listaVocales.indexOf(frase.charAt(i)) !== -1) vocales += frase.charAt(i); i++;



console.log('Vocales en la frase: '+ vocales);
alert('Vocales en la frase: ' + vocales);
