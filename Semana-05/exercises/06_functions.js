console.log('~ Functions ~');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 6.a');
function add(a, b) {
    return 'The result is: ' + (a + b);
}
var result = add(5, 20);
console.log(result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado-.*/

console.log('-Exercise 6.b');
function add(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    } else {
        alert('Error: One of the elements is NOT a number');
        return NaN;
    }
}
var resultTwo = add(15, 'factor');
console.log(resultTwo)

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número 
entero.*/

console.log('-Exercise 6.c');
function validateInteger(x) {
    if (x % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
var integerValue = validateInteger(25);
console.log(integerValue);
var intergerNot = validateInteger(25.5);
console.log(intergerNot)

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso
que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('-Exercise 6.d');
function add(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return a + b;
        } else {
            if (validateInteger(a) == false) {
                alert('Error: the element ' + a + ' is NOT integer');
                return Math.round(b)
            }
        }
    } else {
        alert('Error: One of the elements is NOT a number');
        return NaN;
    }
}
var resultThree = add(25.45, 10);
console.log(resultThree);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual.*/

console.log('-Exercise 6.e');
function addValidation(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        if (validateInteger(a) == true && validateInteger(b) == true) {
            return true;
        } else {
            if (validateInteger(a) == false) {
                alert('Error: the element ' + a + ' is NOT integer');
                return Math.round(b)
            }
        }
    } else {
        alert('Error: One of the elements is NOT a number');
        return NaN;
    }
}
function add(a, b) {
    var addition = addValidation(a, b);
    if (addition == true) {
        return a + b;
    } else {
        return addition
    }
}
var resultFour = add(68, 32);
console.log(resultFour)


