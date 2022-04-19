console.log('~ For ~');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una
alerta utilizando cada una de las palabras.*/

console.log('-Exercise 5.a');
var fruits = ['banana', 'apple', 'orange', 'watermelon', 'strawberry'];
for (i = 0; i < fruits.length; i++)
    alert(fruits[i]);

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
modificada.*/

console.log('-Exercise 5.b');
for (a = 0; a < 5; a++) {
    var theFruits = fruits[a] + ' ';
    var upperCaseFruits = (theFruits.toUpperCase()).substring(0, 1) + (theFruits.toLowerCase()).substring(1);
    fruits[a] = upperCaseFruits;
    console.log(fruits[a]);
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
cadena completa.*/

console.log('-Exercise 5.c');
var sentence = ''
for (var e = 0; e < 5; e++) {
    sentence += fruits[e] + '';
}
alert(sentence)

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('-Exercise 5.d');
console.log('Shown in alert');
var repetitions = []
for (var o = 0; o < 10; o++) {
    repetitions[o] = o
}
console.log(repetitions)

