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

const question = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();

  const operator = getOperator();
  console.log(`Question: ${num1} ${operator} ${num2}`);

  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return;
  }

};


// const correctAnswer = () => {
//   switch(operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     default:
//       return;
//   }
// };

gameLogic(rules, question(), correctAnswer);

const startGame = () => {
  
  for (let i = 0; i < 3; i += 1) {
    
    const num1 = getRandNum();
    const num2 = getRandNum();

    const operator = getOperator();

    let result = 0;

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userInput = readlineSync.question('Your answer: ');
    switch(operator) {
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

  };

  // console.log(`Congratulations, ${name}`);

};

startGame();


