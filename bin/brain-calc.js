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
import { gameLogic } from '../src/index.js';

const getRandNum = () => {
  const digits = 10;
  const generateNum = Math.random() * digits;
  return Math.floor(generateNum);
};

const operators = ['+', '-', '*'];

const getOperator = () => {
  const rand = (Math.random() * 3);
  const result = Math.floor(rand);

  return operators[result];
};

const rules = 'What is the result of the expression?';

const getTask = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();
  const operator = getOperator();

  const question = `Question: ${num1} ${operator} ${num2}`;

  switch (operator) {
    case '+':
      return { askUser: question, correctAnswer: num1 + num2 };
    case '-':
      return { askUser: question, correctAnswer: num1 - num2 };
    case '*':
      return { askUser: question, correctAnswer: num1 * num2 };
    default:
  }
};

// const question = getTask();
// const askUser = question.askUser;
// const correctAnswer = question.correctAnswer;

gameLogic(rules, getTask());
