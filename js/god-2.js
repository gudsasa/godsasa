//+++++++++++++++++++++++++++++++++++++++++++

// const grade = 22;

// if (grade >= 90) {
//     console.log("Perfectly");
// } else if (grade >= 80) {
//     console.log("Good");
// } else if (grade >= 70) {
//     console.log("Satisfactorily");
// } else {
//     console.log("Unsatisfactorily");
// }

//++++++++++++++++++++++++++++++++++++++++++++++++

// function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));

//+++++++++++++++++++++++++++++++++++++++++++++++++

// function toggleModalVisibility(isVisible) {
//     return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getSubstring(string, length) {
//     return string.slice(0, length);
// }
// console.log(getSubstring("Hello world", 5));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//     console.log(hasSpam); // true;
//     console.log("Warning: This message contains forbidden words.");
// } else {
//     console.log(hasSpam); // false;
//     console.log("You can safely open this message.");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false
// - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені(параметр firstName),
// у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий.
// Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//     if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkForName("Jason Neis", "Jason")); // true;
// console.log(checkForName("Jason Neis", "Jasony")); // false;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//         return "File extension matches";
//     } else {
//         return "File extension does not match";
//     }
// }
// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("app.js", ".html"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//     if (file.indexOf(".") > -1) {
//         return file.slice(0, file.indexOf("."));
//     } else {
//         return file;
//     }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("index.js"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач.
// Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(),
// доповни код функції таким чином, щоб вона повертала повне(об'єднане) ім'я файлу з доданим розширенням,
// зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`;
// }

// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("    report ", "csv"));
// console.log(createFileName(" presentation    ", "xml"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++) total += i;
//     return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
// }

// for (let i = 20; i >= 0; i -= 5) {
//     console.log(i);
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція calculateEvenTotal(number) приймає ціле число(параметр number).
// Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно.
// Парні числа — це ті, що можна поділити на 2 без остачі(як це зробити розглядалося у темі Арифметичні операції у модулі 1).
//  Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++)
//         if (i % 2 === 0) {
//             total += i;
//         }
//     return total;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//     let number;
//     for (let i = start; i <= end; i++) {
//         if (i % divisor == 0) {
//             number = i;
//             return i;
//         }
//     }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// console.log(findNumber());

//++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++             1         +++++++++++++++++++++++++

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
//  Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!",
//     де < quantity > це кількість замовлених дроїдів, а < totalPrice > це їх загальна вартість.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice <= customerCredits) {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     } else {
//         return "Insufficient funds!";
//     }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++       2      ++++++++++++++++++++++

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message)
// та перевіряє його довжину відповідно до заданої максимальної довжини(параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } else {
//         return message.slice(0, maxLength) + "...";
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++     3     +++++++++++++++++++++++++++++++++++

// Функція checkForSpam(message) приймає рядок(параметр message),
// перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
//  Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//     const messageLowerCase = message.toLowerCase();
//     return messageLowerCase.includes("spam") || messageLowerCase.includes("sale");
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//+++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++     4     +++++++++++++++++++++++

// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача
// (параметр country) і повертати повідомлення про результат.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
// де замість < country > і < price > необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
// то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// function getShippingCost(country) {
//     let price;
//     switch (country) {
//         case `China`:
//             price = 100;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case `Chile`:
//             price = 250;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case `Australia`:
//             price = 170;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case `Jamaica`:
//             price = 120;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break;
//         default:
//             return `Sorry, there is no delivery to your country`;
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
