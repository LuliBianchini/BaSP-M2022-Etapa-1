console.log('~ Variables and Operators ~');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
una 3er variable.*/

console.log('-Exercise 1.a:');
var firstNumber = 25;
var secondNumber = 75;
var result = firstNumber + secondNumber;
console.log(result)

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

console.log('-Exercise 1.b:');
var firstName = 'Lucía ';
var surname = 'Bianchini';
var completeName = firstName + surname;
console.log(completeName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
resultado de la suma en una 3er variable (utilizar length).*/

console.log('-Exercise 1.c:');
var firstString = ('strawberry fields');
var secondString = ('yellow submarine');
var totalCharacters = firstString.length + secondString.length
console.log(totalCharacters)