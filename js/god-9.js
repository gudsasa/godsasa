//+++++++++++++++++++++++++++++++++++++++++++++++

// try {
//     const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//     console.log(error.name); // "SyntaxError"
//     console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");

// // Змінна error — це об'єкт помилки з інформацією про те, що сталося.

// // У цього об'єкта є кілька корисних властивостей:

// // name — тип помилки. Для помилки парсингу — це SyntaxError.
// // message — повідомлення про деталі помилки.
// // stack — стек викликів функцій на момент помилки. Використовується для налагодження.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     form.reset();
// });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
