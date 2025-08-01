//1. Базовые преобразования:
const str = "JavaScript is AWESOME".toUpperCase();
console.log (str);

//2.Извлечение подстрок:
const date = "2024-07-30".split('-');
const year = date[0];
const month = date[1];
const day = date[2];

console.log(`Год: "${year}" / Месяц: "${month}" / День: "${day}"`);

//3.Поиск и замена:
const string = " Я люблю JavaScript!. Я люблю это дело ";
const modifiedString = string
  .replace("JavaScript", "программирование")
  .replaceAll("люблю", "обожаю");

console.log(modifiedString);

//4.Работа с разделителями:
const list = " яблоки,груши,виноград";
const separator = list
  .trim()
  .toUpperCase()
  .split(',')
  .join(' | ');

console.log(separator);

//5.Проверка содержимого:
const mail = "example@mail.com";

console.log(mail.includes('@'));
console.log(mail.endsWith('.com'));

//6.Маскирование данных:
const card = "1234567812345678";
const mask = `${card.slice(0, 4)} **** **** ${card.slice(12)}`;

console.log(mask)

//7.Анализ строки:
const word = "Строка была пропущена, поэтому я написал свою."
const length = word.length;
const firstSymbol = word[0];
const lastSymbol = word[length - 1];
const middleSymbol = word[length / 2];

console.log(`Длинна строки: "${length}"
  Первый символ: "${firstSymbol}"
  Последний символ: "${lastSymbol}"
  Символ посередине: "${middleSymbol}"`);
