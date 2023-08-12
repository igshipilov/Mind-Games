#!/usr/bin/env node

/*

Сгенерировать два разных числа
Выполнить операцию + или - или *
Запомнить результат
Вывести в консоль эти же числа с этой же операцией
Принять от пользователя ответ

Если ответ не совпал:

1. вернуть: 'USER_REPLY' is wrong answer ;(. Correct answer was 'CORRECT_ANSWER'.
Let's try again, USERNAME!

2. Завершить игру

Если ответ совпал:
1. вернуть: Correct!
2. И перейти к следующему шагу.

После третьего успешного раунда вывести:
Congratulations, USERNAME!

*/

import readlineSync from 'readline-sync';

const getRandNum = () => {
  const digits = 10;
  const generateNum = Math.random() * digits;
  const num = Math.floor(generateNum);

  return num;
};

const operators = ['+', '-', '*'];

const getOperator = () => {
  const rand = (Math.random() * 3);
  const result = Math.floor(rand);

  return operators[result];
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandNum();
    const num2 = getRandNum();

    const operator = getOperator();

    let result = 0;

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userInput = readlineSync.question('Your answer: ');
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        break;
    }

    if (+userInput !== result) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${result}'.Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

startGame();
