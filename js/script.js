let num1 = +prompt ("Введите первое число", "");
let num2 = +prompt ("Введите второе число", "");

const message = 
  `Результаты математических операций:\n` +
  `Сложение: ${num1} + ${num2} = ${num1 + num2}\n` +
  `Вычитание: ${num1} - ${num2} = ${num1 - num2}\n` +
  `Умножение: ${num1} * ${num2} = ${num1 * num2}\n` +
  `Деление: ${num1} / ${num2} = ${num1 / num2}\n`;

alert (message);
console.log (message);