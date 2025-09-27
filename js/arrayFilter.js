// 1. Фильтрация четных чисел
{
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter((num) => num % 2 === 0);

console.log(result);
}

// 2. Фильтр длинны строк
{
const words = ["apple", "banana", "cherry", "date"];
const result = words.filter((str) => str.length > 5);

console.log(result);
}

// 3. Фильтрация массива объектов
{
const users = [{name: "John", age: 25}, {name: "Anna", age: 17}, {name: "Mike", age: 30}];
const adultUsers = users.filter((num) => num.age >= 18);

console.log(adultUsers);
}

// 4. Фильтация положительных чисел
{
const numbers = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = numbers.filter((num) => num >= 0);

console.log(positiveNumbers);
}

// 5. Фильтрация строк на "A"
{
const fruits = ["apple", "banana", "avocado", "cherry", "apricot"];
const filteredFruits = fruits.filter((str) => str[0] === "a");

console.log(filteredFruits);
}

// 6. Отфильтровать товары по цене
{
const goods = [{name: "book", price: 15}, {name: "pen", price: 5}]
const highPrice = goods.filter((num) => num.price > 10);

console.log(highPrice);
}

// 7. Отфильтровать даты
{
const dates = ['2021-07-29', '2019-02-27', '2022-06-13', '2026-03-03', '2025-11-20', '2025-04-01', '2030-01-21'];
const futureDates = dates.filter((str) => str > '2025-09-26');

console.log(futureDates);
}

// 8. Убрать дубликаты
{
const numbers = [1, 2, 3, 4, 3, 5, 5, 6, 1, 2, 7];
const uniqueNumbers = numbers.filter((num, index) => numbers.indexOf(num) === index);

console.log(uniqueNumbers);
}