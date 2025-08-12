//1. Вывод числе от 1 до N
const N = parseInt(prompt("Введите любое число N:"));

for (let i = 1; i <= N; i = i + 1) {
  console.log(i);
}

//2. Сумма чисел от 1 до X
const X = parseInt(prompt("Введите любое число X:"));
let sum = 0;

for (let Y = 1; Y <= X; Y++) {
  sum = sum + Y;
}

console.log("Сумма чисел от 1 до " + X + " равна: " + sum);

//3. Четные числа
for (let i = 2; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//4. До первого четного числа
let num;

do {
  num = parseInt(prompt("Введите четное число:", 0)); 
} while (isNaN(num) || num % 2 !== 0);

console.log (`Вы ввели четное число: ${num}`);

//5. Среднее арифметическое
let add = 0;
let count = 0;
let input;

while (true) {
  input = prompt("Введите число (или 'стоп' для завершения):");

  if (input === "стоп") {
    break;
  }

  const Z = parseFloat(input)

  if (isNaN(Z)) {
    alert("Ошибка: введите число или 'стоп'!");
    continue;
  }

  add = add + Z;
  count++;
}

const average = add / count;
console.log(`Среднее арифметическое: ${average}`);

//6. Максимальное число
let max = null
while (true) {
  let A = prompt("Введите число (или 'стоп' для завершения):");

  if (A === "стоп") {
    break;
  }

  let B = Number(A);
  if (isNaN(B)) {
    continue;
  }

  if (B > max) {
    max = B;
  }
}

console.log(`Максимальное число: ${max}`);

//7. Перевёрнутая строка
const str = prompt("Введите вашу строку");
let reversed = "";

for (i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

console.log(`Ваша строка наоборот: ${reversed}`);

//8. Подсчет гласных
const line = prompt("Введите вашу строку").toLowerCase();
let vawel = 0

for (i = 0; i < line.length; i++) {
  const char = line[i];
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    vawel++;
  }
}

console.log(`Количество гласных в вашей строке: ${vawel}`);

//9. Замена символов
const direct = prompt("Введите ваше слово с буквой 'A'")
let result = "";

for (i = 0; i < direct.length; i++) {
  if (direct[i] === 'a' || direct[i] === 'A') {
    result += '!';
  } else {
    result += direct[i];
  }
}

console.log (result);