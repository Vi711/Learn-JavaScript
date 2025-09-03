// 1. Написание чистой функции
{
const card = ['apple', 'banana'];
const item = 'orange';

function addToCard(card, item) {
  return [...card, item];
}

let newCard = addToCard(card, item);

console.log(card);
console.log(newCard);
}

//  2. Проблема поверхностного копирования
{
const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'dark',
      notifications: true
    }
  }
};

let copy = JSON.stringify(user);
let userClone = JSON.parse(copy);
userClone.profile.settings.theme = 'light';

console.log(user.profile.settings.theme);
console.log(userClone.profile.settings.theme);
}

// 3. Возврат по ссылке
{
function getLogger() {
  const logs = [];

  return {
    addLog(message) {
      logs.push(message);
    },
    getLogs() {
      return logs;
    }
  };
}

const logger = getLogger();
logger.addLog('Session started');

const logsReference = logger.getLogs();
;logsReference.push('User logget in');

console.log(logger.getLogs());
}

// Выводом будет массив ['Session started', 'User logged in']
// Функция создает потенциальную проблему, поскольку ссылка возвращает к исходному массиву. 
// Если пользователей несколько, то изменения значений внутри массива отразится на всех, кто владеет ссылкой на массив.
// Это приведёт к мутации массива и к потенциальным ошибкам, плюс это не является безопасным.
// Для избежания подобных ситуаций необходимо возвращать копию массива.

{
function getLogger() {
  const logs = [];

  return {
    addLog(message) {
      logs.push(message);
    },
    getLogs() {
      return [...logs];
    }
  };
}

const logger = getLogger();
logger.addLog('Session started');

const logsReference = logger.getLogs();
;logsReference.push('User logget in');

console.log(logger.getLogs());
}

// 4. Чистая функция, изменяющая вложенный объект
{
const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'light',
    }
  }
};

function enableDarkTheme(user) {
  return {
    ...user,
    profile: {
      ...user.profile,
      settings: {
        ...user.profile.settings,
        theme: 'dark'
      }
    }
  }
}

const updatedUser = enableDarkTheme(user);

console.log(user.profile.settings.theme);
console.log(updatedUser.profile.settings.theme);
}