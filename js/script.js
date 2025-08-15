// 1. Найти сумму всех элементов массива
let numbers = [1, 2, 3, 4, 5];
let sum = 0

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let reduceSum = numbers.reduce((sum, current) => sum + current, 0);

console.log(sum, reduceSum)

// 2. Найти максимальный элемент в массиве
let num = [3, 7, 2, 9, 5];
let max = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

let methodMax = Math.max(...num);

console.log(max, methodMax);

// 3. Проверить, есть ли элемент в массиве
let fruits = ['apple', 'banana', 'orange'];
let search = 'banana'
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === search) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Элемент найден")
} else {
  console.log("Элемент не найден")
}

if (fruits.includes(search)) {
  console.log("Элемент найден")
} else {
  console.log("Элемент не найден")
}

// 4. Перевернуть массив
let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

let reverseArr = [...arr].reverse();

console.log(reversedArr, reverseArr);

// 5. Посчитать количество определенного элемента в массиве
let numeral = [1, 2, 3, 2, 4, 2, 5];
let count = 0;

for (let i = 0; i < numeral.length; i++) {
  if (numeral[i] === 2) {
    count++;
  }
}

let filterCount = numeral.filter(num => num === 2).length;

console.log(count, filterCount);

// 6. Найти среднее значение элементов массива
let array = [10, 20, 30, 40];
let almount = 0

for (let i = 0; i < array.length; i++) {
  almount += array[i];
}
const average = almount / array.length;

const methodSum = array.reduce((acc, num) => acc + num, 0);
const methodAverage = methodSum / array.length;

console.log(average, methodAverage);

// 7. Отфильтровать четные числа
let numberList = [1, 2, 3, 4, 5, 6];
let evenValues = [];

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] % 2 === 0) {
    evenValues.push(numberList[i])
  }
}

let evenElements = numberList.filter(number => number % 2 === 0);

console.log (evenValues, evenElements);

// 8. Удвоить каждый элемент массива
let originalArr = [1, 2, 3];
let doubleArr = [];

for (let i = 0; i < originalArr.length; i++) {
  doubleArr.push(originalArr[i] * 2);
}

let doubleArray = originalArr.map(number => number * 2);

console.log(doubleArr, doubleArray);