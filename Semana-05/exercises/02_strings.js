
/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
toUpperCase).*/

console.log('-Exercise 2.a:');
var stringOne = 'wonderwall';
console.log(stringOne.toUpperCase(stringOne));

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');
console.log(stringOne.substring(0, 5));

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.c:');
console.log(stringOne.substring(7, 10));

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('-Exercise 2.d:');
var newString = stringOne.substring(0, 1).toUpperCase() + stringOne.substring(1, 11).toLowerCase(stringOne);
console.log(newString);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 2.e:');
var stringTwo = 'string with spaces';
var blankSpace = stringTwo.indexOf(' ');
console.log(blankSpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/

console.log('-Exercise 2.f:');
var stringThree = 'successful management';
var finalString = stringThree.substring(0, 1).toUpperCase() + stringThree.substring(1, 10).toLowerCase(stringThree)
    + ' ' + stringThree.substring(stringThree.indexOf(' ') + 1, stringThree.indexOf(' ') + 2).toLocaleUpperCase() +
    stringThree.substring(stringThree.indexOf(' ') + 2, stringThree.length).toLocaleLowerCase();
console.log(finalString)






