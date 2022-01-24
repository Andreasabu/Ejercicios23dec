
// ejercicio 1: crea una funciona que tome como parametro un numero . si es entero monstramos true y si no false
function isInteger(num) {
    return Number.isInteger(num);
}
console.log(isInteger(10)); // saldra true porque es entero, si pongo 10,00


// ejercicio 2 crea un afuncion que tome como parametros dos strings. si a contiene b =  b + a. si no =  a + b
function wordsTogether(a,b) {

    if(a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

console.log(wordsTogether("think, therefore I am", "I"));

//||

// if (a.indexof(b) !== -1)

// ejercicio 3: crea un funcion que tome como parametro un numero y lo divida en digitos individuales dentro de un array.

function toArray(num) {
    const newArray = String(num).split(""); //string vacio para tener en cuenta a dividir cada uno de los carateres
    const arr = [];
    // arrow functions : para volver a usar esa funcion, entonces: 
    //const nombreDeLaFuncion = a => {console.log(a)} PARA UN SOLO PARAMETRO
    // (a,b) => {a + b} varios parametros
    
    newArray.forEach((item) => {
        arr.push(Number(item));
    });
    console.log(arr);
}

toArray(1234);

// || 

// function toArray(num) {
//     const newArr = Array.from(String(num), Number)
//          console.log(newArray);
// }
// toArray(1234);


// Ejercicio 4 : Crea una funcion que tome como parametro un array. si todos los elementos son iguales, mostramos true si no false

function areEqual(array) {
    for (let i = 1; i < array.length; i++) { //pone 1 porque quiere comparar con el index 0, va a comparar todos los elementos del array con el PRIMER ELEMENTO
        if (array[0] === array[i]) {     // [1, 2, 3, 4,] empieza por el elemento 1 (2) pero en array empieza por el [0] entonces 1 como primer elemento.
            return true;
        }  else {
            return false;
        }            
    }
}


console.log([true, true, true]); // true porque todos son estrictamente iguales.

//ejercicio 5: Dado un array de numeros, muestra por consola un array con esos numeros ordenador de forma descendente.

function orderedNumbers(array) {
    return array.sort(function (a,b) {
        return b - a;
    });
}

console.log(orderedNumbers([56, 0, 12, 4 ,31]));

// ejercicio 6: dado un array de string, muestro por consola un array con orden alfabeticamente.

const letters = ["b", "c", "d"];
console.log(letters.sort());

// ejercicio 7 : crea una funcion que tome como parametro un array de strings i muestre el string mas largo

minuto 1:35:14

// ejercicio 9. Crea una funcion que tome un objeto como prametro.
// remueve la propierdad country y su valor

/* const myObjt = {
    city: 'Sacramento',
    state: 'california',
    country: 'usa',
    continent: 'north America',
};
    
function deleteKey(object) {
    delete object.country;
    console.log(object);
} */

///11. Reemplaza string vacios por null
// const letterObj = {a: '', b: 'b', c: '', d: 'd'}

// function replaceKey(obj) {
//     for (const key in obj) {
//         if (obj[key] === '' || obj [key] )
//     };
// }