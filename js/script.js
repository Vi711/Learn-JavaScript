// 1. Простой калькулятор
{
const calculate = (a, b, operation) => {
  const result = operation(a, b)
  return result;
}

const sum = (a, b) => {return a + b;}
const subtraction = (a, b) => {return a - b;}
const multiply = (a, b) => {return a * b;}
const divide = (a, b) => {return a / b;}
const power = (a, b) => {return Math.pow(a, b);}

console.log(calculate(10, 4, sum));
console.log(calculate(10, 4, subtraction));
console.log(calculate(10, 4, multiply));
console.log(calculate(10, 4, divide));
console.log(calculate(10, 4, power));
}

// 2. Массив в квадрате
{
const squareArray = (arr, callback) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const square = (number) => number * number;

console.log(squareArray([1, 2, 3, 4, 5, 6], square));
}

// 3. Фильтр четных чисел
{
const filterArray = (arr, callback) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const even = (number) => number % 2 === 0;

console.log(filterArray([1, 2, 3, 4, 5, 6], even));
}

// 4. Форматирование текста
{
const formatText = (text, formatter) => {
  return formatter(text);
}

const toUpperCaseForm = (text) => {return text.toUpperCase();}
const toLowerCaseForm = (text) => {return text.toLowerCase();}

console.log(formatText("Здесь могла быть ваша реклама", toUpperCaseForm));
console.log(formatText("Здесь могла быть ваша реклама", toLowerCaseForm));
}

// 5. Собственный forEach
{
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

const nubmers = [1, 2, 3, 4, 5, 6, 7];
const callback = (elem, index, arr) => {
  console.log('elem:', elem, 'index:', index, 'arr:', arr)
};

myForEach(nubmers, callback);
}