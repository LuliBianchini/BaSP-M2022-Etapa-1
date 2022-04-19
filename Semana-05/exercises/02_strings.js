console.log('~ Strings ~');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
toUpperCase).*/

console.log('-Exercise 2.a:');
var stringOne = 'wonderwall';
var stringOneUpper = stringOne.toUpperCase(stringOne);
console.log(stringOneUpper);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');
var stringTwo = 'supersonic'
console.log(stringTwo.substring(0, 5));

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.c:');
var stringThree = 'undercover'
console.log(stringThree.substring(7, 10));

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('-Exercise 2.d:');
var stringFour = 'photograph'
var newString = stringFour.substring(0, 1).toUpperCase() + stringFour.substring(1, 11).toLowerCase(stringFour);
console.log(newString);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 2.e:');
var stringFive = 'string with spaces';
var blankSpace = stringFive.indexOf(' ');
console.log(blankSpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/

console.log('-Exercise 2.f:');
var stringSix = 'successful management';
var finalString = stringSix.substring(0, 1).toUpperCase() + stringSix.substring(1, 10).toLowerCase(stringSix)
    + ' ' + stringSix.substring(stringSix.indexOf(' ') + 1, stringSix.indexOf(' ') + 2).toLocaleUpperCase() +
    stringSix.substring(stringSix.indexOf(' ') + 2, stringSix.length).toLocaleLowerCase();
console.log(finalString)






