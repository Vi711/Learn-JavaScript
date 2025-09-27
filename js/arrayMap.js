// 1. Умножение массива
{
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => num * 2);

console.log(doubleNumbers);
}

//2. Массив строк
{
const arr = ["apple", "banana", "cherry"];
const arrLength = arr.map((str) => str.length);

console.log(arrLength);
}

// 3. Объект в массив имен
{
const users = [{name: "John", age: 25}, {name: "Anna", age: 30}];
const names = users.map((users) => users.name);

console.log(names);
}

// 4. Цельсий в Фаренгейты
{
const tempC = [0, 15, 25, 30, -5];
const tempF = tempC.map((num) => (num * 9/5 + 32));

console.log(tempF);
}

// 5. Массив в объект
{
const numbers = [1, 4, 9, 16];
const objectNumbers = numbers.map(num => ({
  value: num,
  square: num * num
}));

console.log(objectNumbers);
}

// 6. Заглавная буква
{
const words = ["hello", "world", "javascript"];
const titleCase = words.map(str => str[0].toUpperCase() + str.slice(1))

console.log(titleCase);
}

// 7. Четные числа
{
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.map((num) => {
  if(num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});

console.log(evenNumbers);
}

// 8. Строки в числа
{
const stringNumbers = [1, "2", 3, "4", 5];
const numbers = stringNumbers.map(str => Number(str));

console.log(numbers);
}

// 9. Добавить скидку продуктам
{
const list = [{name: "apple", price: 1.2}, {name: "banana", price: 0.8}];
const discounList = list.map(item => ({
  ...item,
  discountedPrice: item.price * 0.9,
}));

console.log(discounList);
}