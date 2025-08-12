const Number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

alert("Отгадайте число от 1 до 100");

while (true) {
  const guess = parseInt(prompt("Введите своё число:"));
  attempts++;

  if (isNaN(guess)) {
    alert("Пожалуйста введите число!");
    continue;
  }

  if (guess < Number) {
    alert("Ваше число меньше загаданного!");
  } else if (guess > Number) {
    alert("Ваше число больше загаданного!");
  } else {
    alert (`Поздравляю. Ты отгадал число за ${attempts} попыток.`);
    break;
  }
}
