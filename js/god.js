//Напишіть функцію, яка перебирає масив логінів і перевіряє
//чи є імя введене в імпут у цьому масиві і у разі, якщо є - вивидоться повідомлення "Доступ дозволено"

// const logins = ["Ajax", "Poli", "Mango"]
// const str = prompt("Введіто логін")
// function checkLogin(logins, str) {
//     return logins.incluber(srt) ? "Доступ дозволено" : "Дотуп не дозволено"
// }
// console.log(checkLogin(logins, str));

//++++++++++++++++++++++++++++++++++++++++++++++

// Напишіть функцію min(a,b), яка повертає менше з чисел a і b.

// function min(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// console.log(min(3, 5));

//++++++++++++++++++++++++++++++++++++++++++++++

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-рол");
// const findIndex = styles.indexOf("Блюз");
// if (findIndex !== -1) {
//     styles.splice(findIndex, 1, "Класика");
// }
// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");
// console.log(styles);

//+++++++++++++++++++++++++++++++++++++++++++++++

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const logins = ["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"];

// function logItems(array) {
//     for (let i = 0; i < array.logins; i++){
// console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(logins);

//++++++++++++++++++++++++++++++++++++++++++++++++

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     let smallerNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallerNumber) {
//             smallerNumber = number
//         }
//     }
//     return smallerNumber;
// }
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, -7];
// console.log(findSmallerNumber(numbers));

//+++++++++++++++++++++++++++++++++++++++++++++++++

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// console.log(args);
// console.log(arguments);

// function caclculateAverage(...args) {
//     let sumn = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === "number") {
//             sumn += arg;
//             count++;
//         }
//     }
//     return sumn / count;
// }
// console.log(caclculateAverage(5, 10, 15, "Hello"));

//++++++++++++++++++++++++++++++++++++++++++++++++++
