// 1. Найти сумму чисел
{
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, currentValue) => {
  acc = acc + currentValue;
  return acc;
}, 0);

console.log(sum);
}

// 2. Произведение чисел
{
const numbers = [1, 2, 3, 4, 5];
const multiplication = numbers.reduce((acc, currentValue) => {
  acc = acc * currentValue;
  return acc;
})

console.log(multiplication);
}

// 3. Объединить строки в одну
{
const strings = ["a", "b", "c", "d"];
const combinedString = strings.reduce((acc, currentString) => {
  acc = acc + currentString;
  return acc;
}, "");

console.log(combinedString);
}

// 4. Группировка по четности
{
const arr = [1, 2, 3, 4, 5, 6];
const sortedArr = arr.reduce((acc, currentValue) => {
  if (currentValue % 2 === 0) {
    acc.even.push(currentValue);
  } else {
    acc.odd.push(currentValue);
  }
  return acc;
}, {even: [], odd: []});

console.log(sortedArr);
}

// 5. Удалить все дубликаты
{
const numbers = [1, 2, 3, 4, 3, 5, 5, 6, 1, 2, 7];
const uniqueNumbers = numbers.reduce((acc, currentValue) => {
  if (!acc.includes(currentValue)) {
    acc.push(currentValue);
  }
  return acc;
}, []);

console.log(uniqueNumbers);
}

// 6. Разгладить массив
{
const arr = [[1,2], [3,4], [5,6]];
const singleArr = arr.reduce((acc, currentArr) => acc.concat(currentArr), []);

console.log(singleArr);
}