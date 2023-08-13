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

// import readlineSync from 'readline-sync';
import { startGame } from '../index.js';

// --- обслуживающие функции --- 
const getRandNum = () => {
  const digits = 10;
  const generateNum = Math.random() * digits;

  return Math.floor(generateNum);
};


const operators = ['+', '-', '*'];

const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getOperator = () => {
  const rand = (Math.random() * 3);
  const result = Math.floor(rand);

  return operators[result];
};

// -----------------------------^


const rules = 'What is the result of the expression?';

// displays as 'Question: ' -> returns an expression, for e.g. 5 + 2
const getTask = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();
  const operator = getOperator();

  return `${num1} ${operator} ${num2}`;
};


// in ENGINE (index.js) this func receives getTask() func as argument,
// calculates it and than this func's result compares with 'userAnswer'
const getCorrectAnswer = (task) => {

  const [num1, operator, num2] = task.split(' ');
  const result = expressions[operator](Number(num1), Number(num2));

  return result.toString();
};



//  TEST ENGINE
// =====================
// const startGame = (rules, getTask, getCorrectAnswer) => {
//   console.log('Welcome to the Brain Games!');

//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log(rules);

//   for (let i = 0; i < 3; i += 1) {
//     const question = getTask();
//     const correctAnswer = getCorrectAnswer(question);

//     console.log(`Question: ${question}`);
//     const userAnswer = readlineSync.question('Your answer: ');

//     if (userAnswer !== correctAnswer) {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
//       Let's try again, ${userName}!`);
//       return;
//     }
//     console.log('Correct!');
//   }

//   console.log(`Congratulations, ${userName}`);
// };
// =====================


const playBrainCalc = startGame(rules, getTask, getCorrectAnswer);

export { playBrainCalc };