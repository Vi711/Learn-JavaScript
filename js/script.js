//1. Проверка возраста
const age = prompt('Укажите ваш возраст:');

if (age < 18) {
  alert( 'Доступ запрещён!');
} else if (age >= 18) {
  alert( 'Доступ разрешен!');
}

//2. Чётное или нечётное
const input = prompt('Введите ваше число:');
const num = Number(input);
console.log(num % 2 === 0);

//3. Калькулятор
const a = Number(prompt('Введите первое число:'));
const operator = prompt('Введите оператор (+, -, *, /):');
const b = Number(prompt('Введите второе число:'));

if (isNaN(a) || isNaN(b)) {
  alert('Ошибка! Введите числа.');
} else {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        result = 'Ошибка! Деление на ноль!';
      } else {
        result = a / b;
      }
      break;
    default:
      result = 'Ошибка: неизвестный оператор!';
  }

  alert(result);
}

//4. Проверка длинны строки
const offer = prompt('Введите своё предложение:');

if (offer.length > 10) {
  const openPart = offer.slice (0, 5);
  const maskedPart = "*".repeat(offer.length - 5);
  console.log(openPart + maskedPart);
} else {
  console.log(offer.toUpperCase());
}

//5. Определение времени суток
const hour = Number(prompt('Введите текущий час:'));

if (hour <0 || hour > 23 || isNaN(hour)) {
  alert('Ошибка! Введите число от 0 до 23!');
} else {
  const time = 
    hour <= 5 ? "Ночь":
    hour <= 11 ? "Утро":
    hour <= 17 ? "День":
    "Вечер";

  alert(`Сейчас ${time}.`)
}

//6. Проверка email
const email = prompt ('Введите ваш email:');
const isValid = email.includes("@") && email.includes(".")

alert(isValid ? 'Верный формат!' : 'Ошибка!');

//7. Палиндром (базовый)
const word = prompt('Введите ваше слово:').toLowerCase();

console.log(word === word.split('').reverse().join(''));