//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };
// //Звичайний код
// // const accessType = book.isPublic ? "pulbic" : "private";
// // const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;

// // console.log("🚀 ~ message:", message);

// // Деструктуризуємо
// const { title, author, isPublic, rating } = book;

// // Використовуємо
// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;

// console.log("🚀 ~ message:", message);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
// ];

// // for (const book of books) {
// //     console.log(book.title);
// //     console.log(book.author);
// //     console.log(book.rating);
// // }

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function printUserInfo(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }

// printUserInfo({
//     name: "Alice",
//     age: 25,
//     hobby: "dancing",
// }); // Name: Alice, Age: 25, Hobby: dancing

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
