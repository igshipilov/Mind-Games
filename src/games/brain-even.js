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

// import readlineSync from 'readline-sync';
import { question } from 'readline-sync';
import { startGame } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// // Выведется на экран как Question: генерирует и возвращает число: 
// const getTask = () => {
//   const digits = 100;
//   const generateNum = Math.random() * digits;
//   const result = Math.floor(generateNum);

//   return result;
// };

// // Возвращает 'yes' если полученное число чётное, 'no' если нечётное:
// // сравнивается с userAnswer
// const getCorrectAnswer = (task) => {
//   const result = task % 2 === 0 ? 'yes' : 'no';

//   return result;
// };



const setGameData = () => {

  const digits = 100;
  const generateNum = Math.random() * digits;
  
  const question = Math.floor(generateNum);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const playBrainEven = startGame(rules, setGameData);

export { playBrainEven };
//  TEST ENGINE
// =====================
// // const [question, answer] = [getTask(), checkResult()];
// // console.log(question);
// // console.log(answer);

// const startGame = () => {
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

// startGame();
// =====================
