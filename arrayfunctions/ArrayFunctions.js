// Definimos un array inicial
let array = [1, 2, 3, 4, 5];

// Métodos de arrays

// 1. forEach - Itera sobre cada elemento del array
array.forEach(element => {
  console.log(element);
});

// 2. map - Crea un nuevo array con los resultados de aplicar una función a cada elemento
let mappedArray = array.map(element => element * 2);
console.log(mappedArray);

// 3. filter - Crea un nuevo array con todos los elementos que pasen una prueba
let filteredArray = array.filter(element => element > 2);
console.log(filteredArray);

// 4. reduce - Aplica una función a un acumulador y a cada elemento del array para reducirlo a un único valor
let reducedValue = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reducedValue);

// 5. some - Comprueba si al menos un elemento del array cumple con una condición
let someCondition = array.some(element => element > 4);
console.log(someCondition);

// 6. every - Comprueba si todos los elementos del array cumplen con una condición
let everyCondition = array.every(element => element > 0);
console.log(everyCondition);

// 7. find - Devuelve el primer elemento del array que cumple con una condición
let foundElement = array.find(element => element > 3);
console.log(foundElement);

// 8. findIndex - Devuelve el índice del primer elemento que cumple con una condición
let foundIndex = array.findIndex(element => element > 3);
console.log(foundIndex);

// 9. includes - Comprueba si un array contiene un valor especificado
let includesElement = array.includes(3);
console.log(includesElement);

// 10. push - Añade uno o más elementos al final del array
array.push(6);
console.log(array);

// 11. pop - Elimina el último elemento del array
array.pop();
console.log(array);

// 12. shift - Elimina el primer elemento del array
array.shift();
console.log(array);

// 13. unshift - Añade uno o más elementos al inicio del array
array.unshift(0);
console.log(array);

// 14. slice - Devuelve una copia de una parte del array en un nuevo array
let slicedArray = array.slice(1, 3);
console.log(slicedArray);

// 15. splice - Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos
array.splice(2, 1, 'newElement');
console.log(array);

// 16. concat - Combina dos o más arrays
let array2 = [7, 8, 9];
let concatenatedArray = array.concat(array2);
console.log(concatenatedArray);

// 17. join - Une todos los elementos de un array en una cadena
let joinedString = array.join('-');
console.log(joinedString);

// 18. reverse - Invierte el orden de los elementos del array
array.reverse();
console.log(array);

// 19. sort - Ordena los elementos del array
array.sort();
console.log(array);

// 20. flat - Aplana un array de arrays en un nivel
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat();
console.log(flatArray);
