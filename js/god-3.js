//+++++++++++++++++++++++++++++++++++++++++++++++

// const planets = ["Earth", "Mars", "Venus"];

// if (planets.length >= 3) {
//     console.log("3 or more elements");
// } else {
//     console.log("3 or less elements");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++

// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта.
//  Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//     return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // повертає 4
// console.log(getOrderQuantity(["apple", "banana"])); // повертає 2
// console.log(getOrderQuantity(["apple", "banana", "pear"])); // повертає 3
// console.log(getOrderQuantity([])); // повертає 0

//+++++++++++++++++++++++++++++++++++++++++++++++++

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
//  Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// Оголошена функція getLastElementMeta(array)

// function getLastElementMeta(array) {
//     const lastElementIndex = array.length - 1;
//     return [lastElementIndex, array[lastElementIndex]];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // повертає [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])); // повертає [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"])); // повертає [1, "peach"]
// console.log(getLastElementMeta(["apple"])); // повертає [0, "apple"]

//++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
//  Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//     const lastExtreme = array[0];
//     const lastElemen = array[array.length - 1];
//     return [lastExtreme, lastElemen];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); //  повертає [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // повертає ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // повертає ["apple", "banana"]

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція getLength(array) очікує один параметр array - масив довільних значень.
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// Оголошена функція getLength(array)

// function getLength(array) {
//     const lastGet = array.join("");
//     return lastGet.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // повертає 22
// console.log(getLength(["M", "a", "n", "g", "o"])); // повертає 5
// console.log(getLength(["top", "picks", "for", "you"])); // повертає 14

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає першим параметром рядок, що складається зі слів,
// розділених лише пробілами(параметр message) та другим параметром - число, що містить ціну гравірування за одне слово(параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)

// function calculateEngravingPrice(message, pricePerWord) {
//     const lastPrice = message.split(" ");
//     return lastPrice.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // повертає 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // повертає 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // повертає 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // повертає 80

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//     const lastSlice = array.indexOf(value);
//     if (lastSlice === -1) {
//         return [];
//     } else {
//         return array.slice(0, lastSlice + 1);
//     }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // повертає ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // повертає ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // повертає ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // повертає []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // повертає []

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push
// Оголошена функція createArrayOfNumbers(min, max)

// function createArrayOfNumbers(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;
// }
// console.log(createArrayOfNumbers(1, 3)); // повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // повертає [29, 30, 31, 32, 33, 34]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++     1     ++++++++++++++++++++++++++++++

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function slugify(title) {
//     const slug = title.toLowerCase();
//     return slug.replaceAll(" ", "-");
// }
// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++     2     ++++++++++++++++++++++++++++

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив), secondArray(масив) і maxLength(число).
// Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeArray(firstArray, secondArray, maxLength) {
//     const stastArray = firstArray.concat(secondArray);
//     const startArrayLength = stastArray.length;
//     if (startArrayLength >= maxLength) {
//         return stastArray.slice(0, maxLength);
//     } else {
//         return [];
//     }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++      3     ++++++++++++++++++++++++++++++

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(numbers) та значення(value) як параметри.
// Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function filterArray(numbers, value) {
//     let masArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             masArray.push(numbers[i]);
//         }
//     }
//     return masArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
