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

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив[2016, 2012, 2008, 1997, 1984, 1973, 1967]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод toSorted()

// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"];
// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted((firstStudent, secondStudent) => firstStudent.score - secondStudent.score);

// const inDescendingScoreOrder = students.toSorted((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) => firstStudent.name.localeCompare(secondStudent.name));

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         rating: 7.94,
//     },
//     {
//         title: "Enemy of God",
//         author: "Bernard Cornwell",
//         rating: 8.67,
//     },
// ];

// // Sort books by author name in alphabetical order
// const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

// // Sort books by author name in reverse alphabetical order
// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// // Sort books by rating in ascending order
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// // Sort books by rating in descending order
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Змінна names повинна формуватися за допомогою ланцюжка методів filter, map, toSorted, при цьому інші змінні не повинні оголошуватись

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books;
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//     .filter((book) => book.rating > MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .toSorted((a, b) => a.localeCompare(b));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
