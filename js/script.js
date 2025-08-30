// 1. Приветствие:
function greet(name) {
  return `Привет, ${name}!`;
}

console.log(greet('Иван'));

// 2. Сумма двух чисел:
function sum(a, b) {
  return a + b;
}

let result = sum(10, 20);
console.log(result);

// 3. Проверка на четность:
function isEven(num) {
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));

// 4. Случайное число:
function getRandomNumber(min, max) {
  if(min > max) {
    console.log('Значение min не может быть больше значения max');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(11, 114));

// 5. Форматирование строки:
const formatName = (firstName, lastName) => `${lastName}, ${firstName}`;

console.log(formatName('Виталий', 'Петров'));

// 6. Поиск индекса элемента (пишем собственный метод findIndex):
function findIndex(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 5, 4, 5, 6, 8], 5));

// 7. Поиск в массиве (использовать только цикл for):
function findInArray(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(findInArray([1, 2, 3, 6, 7, 10], 7));

// 8. Калькулятор итоговой суммы (использовать только цикл for):
function calculateTotal(cart) {
  let sum = 0
  for(let i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].quantity
  }
  return sum;
}

console.log(calculateTotal([
  {price: 20, quantity: 4},
  {price: 15, quantity: 2},
  {price: 12, quantity: 3}
]));

// 9. Поиск самого длинного слова:
function findLongestWord(words) {
  let maxLength = 0
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWord(['Трава', 'Дерево', 'Брусок', 'Конь', 'Обувь', 'Велосипед']));

// 10. Сумма всех чисел:
function sumAll(...numbers) {
  return numbers.reduce(function(total, num) {
    return total + num;
  }, 0);
}

console.log(sumAll(1, 3, 14, 24, 32));

// 11. Валидатор пароля:
function validatePassword(password) {
  return password.length > 6 && /\d/.test(password);
}
console.log(validatePassword("dsavs23"));

// 12. Разворот строки:
function reverseString(str) {
  let reversed = '';
  for(let i = str.length-1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(reverseString('abvgde1'));

// 13. Уникальные значения массива:
function getUniqueValues(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(getUniqueValues([1, 3, 5, 5, 6, 4, 3, 1, 2]));

// 14. Трансформация массива в объект:
function arrayToObject(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    const[key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
}

console.log(arrayToObject([['Ветер', 'Дует'], ['Вода', 'Мокрая'], ['Число', 12]]));

// 15. Фильтрация по нескольким условиям:
let users = [{name: 'Ivan',  age: 31, city: 'Saratov'}, {name: 'Oleg', age: 30, city: 'Omsk'}, {name: 'Anastasiya', age: 30, city: 'Moscow'}];

function filterUsers(users, filters) {
  return users.filter(user => {
    for (const key in filters) {
      if (user[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
}

console.log(filterUsers(users, {age: 30, city: 'Moscow'}));

// 16. Разница между двумя массивами:
function arrayDiff(arr1, arr2) {
  const result = [];

  for(let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(arrayDiff([1, 2, 3, 4, 5,], [3, 4, 5, 6, 7]));
