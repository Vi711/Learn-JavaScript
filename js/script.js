// 1. Object.keys
{
let car = { brand: 'Toyota', model: 'Camry', year: 2021 };
const keys = Object.keys(car);

console.log(keys);
}

// 2. Object.values
{
let fruitPrices = { apple: 50, banana: 30, orange: 70 };
const values = Object.values(fruitPrices);
let sum = 0;

for (let price of values) {
  sum += price;
}

console.log(sum);
}

// 3. Object.entries
{
let book = { title: 'JavaScript Basics', author: 'Jane Doe', pages: 200 };
const entries = Object.entries(book);

console.log(entries);
}

// 4. Подсчет количества свойств
{
function countProperties(obj) {
  return Object.keys(obj).length;
}

let book = { title: 'JavaScript Basics', author: 'Jane Doe', pages: 200 };
console.log(countProperties(book));
}

// 5. Поиск максимального значения
{
let scores = { Alex: 100, Bob: 75, Charlie: 95 };
const values = Object.values(scores);
const maxScore = Math.max(...values);

console.log(maxScore);
}

// 6.  Сумма числовых свойств
{
function sumNumericalValues(obj) {
  const values = Object.values(obj);
  return values.reduce((sum, value) => {
    if (typeof value === 'number' && !isNaN(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
}

let scores = { Alex: 100, Bob: 75, Charlie: 95 };
console.log(sumNumericalValues(scores));
}

// 7. Преобразование объекта в query string
{
function toQueryString(obj) {
  return Object.entries(obj)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');
}

console.log(toQueryString({ name: 'John', age: 30 }))
}

// 8. Сравнение двух объектов
{
function areObjectsEqual(obj1, obj2) {
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  if (!firstKeys.every(key => secondKeys.includes(key))) {
    return false;
  }
  return firstKeys.every(key => obj1[key] === obj2[key]);
}

const object1 = { name: 'John', age: 30 };
const object2 = { name: 'John', age: 35 };
const object3 = { name: 'John', age: 30, city: 'Saratov' };
const object4 = { name: 'John', age: 30 };

console.log(areObjectsEqual(object1, object2));
console.log(areObjectsEqual(object1, object3));
console.log(areObjectsEqual(object1, object4));
}