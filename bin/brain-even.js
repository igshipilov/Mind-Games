#!/usr/bin/env node

/*

# Задача

Генерируем число и выводим в консоль в формате:
Question: 15

Пользователь отвечает "yes" или "no", на экран это выводится в формате:
Your answer: yes

Если пользователь ошибся, на экран выводится:
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!

И игра завершается.
Ошибкой считается любой некорректный ввод.

Если пользователь ответил правильно, на экран выводится:
Correct!

И переходим к следующему шагу.

# Логика

Вывести на экран приветствие

Вывести на экран вопрос

Вычислить, является ли сгенерированное число чётным – isEven
    true если чётное
    false если нечётное

Ждать ввод от пользователя
Считать ответ (STDIN?) – userAnswer
    вернуть true если получено 'yes'
    вернуть false если получено 'no'

Сравнить ответ/ввод пользователя с правильным ответом
    если userAnswer === isEven

Вывести на экран соответствующую реакцию (см. выше)

*/

// import greetUser from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// greetUser();

const getQuestion = () => {
  const digits = 100;
  const generateNum = Math.random() * digits;
  const result = Math.floor(generateNum);
  return result;
  // console.log(`Question: ${result}`);
};

// getQuestion();

const gameIsEven = () => {
  // ПРОБА ПЕРА

  // const question = getQuestion();
  // console.log(`Question: ${question}`);
  // const program = readlineSync.question(`Your answer: `);
  // program;

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const isEven = question % 2 === 0;
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    const userAnswer = userInput === 'yes';

    if (userAnswer !== isEven) {
      console.log(`${userInput} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');

    // ПСЕВДОКОД

    // userInput
    // if (userInput !== getQuestion())
    // {return console.log(`'yes' is wrong answer...`)}
    // console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
    // Let's try again, Bill!`)
  }

  console.log(`Congratulations, ${name}`);
};

gameIsEven();
