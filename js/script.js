// 1. Создание и доступ.
const student = {
  'name' : 'Илья',
  'age' : 20,
  'class' : 404,
  'grade' : 3,
};

console.log(`Студент ${student.name} учится в ${student.class} классе и ему ${student.age} лет`);

// 2. Изменение свойств.
student.grade = 4;
student.hobby = 'Рисование';

console.log(student);

// 3. Перебор свойств
const car = {
  'brand' : 'Voltswagen',
  'model' : 'Golf',
  'year' : 12,
};

for(key in car) {
  console.log(`${key} : ${car[key]}`)
};

// 4. Проверка свойства (if...in)
const settings = {
  'theme' : 'dark',
  'volume' : 80,
}

if ('theme' in settings) {
  console.log(settings.theme);
} else {
  console.log('Свойство не найдено');
};

//  5. Поиск в массиве объектов (цикл for)
const movies = [
  {title: 'Инception', director: 'Christopher Nolan', year: 2010},
  {title: 'The Matrix', director: 'Lana Wachowski', year: 1999},
  {title: 'Interstellar', director: 'Christopher Nolan', year: 2014}
];

for (let i = 0; i < movies.length; i++ ) {
  if (movies[i].year < 2005) {
    console.log(`${movies[i].title}`)
  }
};

// 6. Подсчет элементов по условию (цикл for)
let number = 0;
for (let i = 0; i < movies.length; i++) {
  if (movies[i].director === 'Christopher Nolan') {
    number++;
  }
};
console.log(`Кристофер Нолан снял ${number} фильма.`);

// 7. Сумма товаров в корзине
const cart = [
  {name: 'Книга', price: 15, quantity: 2},
  {name: 'Кофе', price: 25, quantity: 1},
  {name: 'Фонарик', price: 10, quantity: 3},
];
let sum = 0;

for(let i = 0; i < cart.length; i++) {
  sum += cart[i].price * cart[i].quantity;
}

console.log(`Сумма товаров: ${sum} рублей.`);

// 8. Поиск объекта по свойству
const users = [
  {id: 1, name: 'Alice', isOnline: true},
  {id: 2, name: 'Bob', isOnline: false},
  {id: 3, name: 'Charlie', isOnline: true},
]

for(let i = 0; i < cart.length; i++) {
  if (users[i].isOnline === true) {
    console.log (users[i].name);
    break;
  }
};

// 9. Группировка по условию.
const animals = [
  {name: 'Кот', type: 'домашнее'},
  {name: 'Медведь', type: 'дикое'},
  {name: 'Собака', type: 'домашнее'},
  {name: 'Лиса', type: 'дикое'},
];
let domestic = [];
let wild = [];

for (i = 0; i < animals.length; i++) {
  if (animals[i].type === 'домашнее') {
    domestic.push(animals[i]);
  } else if (animals[i].type === 'дикое') {
    wild.push(animals[i]);
  }
};

console.log(domestic, wild);

// 10. Поиск минимального значения.
const players = [
  {name: 'Анна', score: 85}, 
  {name: 'Борис', score: 95}, 
  {name: 'Вика', score: 76},
];
let worstPlayer = players[0];
let minScore = players[0].score

for (i = 0; i < players.length; i++) {
  if (players[i].score < minScore) {
    minScore = players[i].score;
    worstPlayer = players[i];
  }
}

console.log(`Меньше всего очков набрал(а) ${worstPlayer.name}. Счет: ${worstPlayer.score}`);

// 11. Объединение двух массивов объектов.
const newProducts = [
  {id: 4, name: 'Чашка'}, 
  {id: 5, name: 'Блюдце'},
];
const oldProducts = [
  {id: 1, name: 'Ложка'}, 
  {id: 2, name: 'Вилка'},
];
let allProducts = [];

allProducts.push(...newProducts, ...oldProducts);
allProducts.sort((a, b) => a.id - b.id);

console.log (allProducts);