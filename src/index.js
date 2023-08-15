/*

Что общее в каждой игре?
- Приветствие
- Запрос имени
- Реакция игры на правильный и неправильный ответы
- Финальное сообщение ('Congratulations...')

Что отличается?
- Условия игры
- Ответы пользователя
- Правильные ответы

Как выглядит тело функции-движка?

## Часть greeting

Welcome!
userName?
Hello, userName!
Rules

## Часть game-win

Question1:
Your answer:
Correct!

Question2:
Your answer:
Correct!

Question3:
Your answer:
Correct!
Congratulations, userName!

## Часть game-lose

(если юзер ошибся)
`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`

Как выполнить Часть 2?

Циклом:
- Счётчик делает +1, пока он < 3
- тело цикла:
  if (userAnswer !== correctAnswer) {
    return Часть game-lose;
  }

Откуда берём correctAnswer?
- Из доп. функции, уникальной в каждой игре

----------------------

const startGame = (rules, question, answer) => {...};

Значит в каждой игре есть функции, которые вводят или вычисляют
уникальные для этой игры значения на каждый аргумент:

есть функция const rules = () => {...}
есть функция const question = () => {...}
есть функция const answer = () => {...}

Движок выполняет весь интерактив (пользователь вводит данные и т.д.)!!

Игра готовит свои данные, они зависят от самой игры:
- brain-even готовит одно число и ответ
- brain-calc готовит два числа и операцию между ними и ответ

?- но если передавать эти числа как аргумент, то как сделать их различающимися в каждом раунде?
!- ответ: уже в самой функции игры в аргумент функции движка должна передаваться функция,
вычисляющая эти значения. ПРОВЕРИТЬ

*/

import readlineSync from 'readline-sync';

const maxRounds = 3;

const startGame = (rules, setQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < maxRounds; i += 1) {
    const [question, answer] = setQuestionAnswer();
    const correctAnswer = answer.toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
