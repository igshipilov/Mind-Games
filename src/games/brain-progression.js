/*

# EXAMPLES

Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!

Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!

Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!


# ЛОГИКА

step = случайное однозначное число 
seqBegin = случайное число (давай не более двухзначного)
seqMaxLength = случайное число от 5 до 10
sequence = массив с числами
toHide = случайное число от 0 до `seqMaxLength - 1`

Начинаем с seqBegin
Делаем шаг (step), пока sequence.length < seqMaxLength:
  sequence.push(seqBegin);
  seqBegin = seqBegin + step;

Когда sequence.length = seqMaxLength:
  sequence[toHide] = '..';
  return sequence.join(' ');

*/

// ----- TESTS ----------------------
// const test = [12, 34, 56];
// test[1] = '..';
// console.log(test);
// console.log(test.join(' '));
// ----------------------------------

import { startGame } from "../index.js";

// --- обслуживающие функции --- 
const rules = 'What is the result of the expression?';

const getRandNum = (max = 10, min = 1) => {
  const generateNum = Math.random() * (max - min) + min;

  return Math.floor(generateNum);
};

// console.log(getRandNum(15));
// -----------------------------^

// ======= BACKUP =============
// const progression = () => {
//   let step = getRandNum(10);
//   let seqBegin = getRandNum(100);
//   let seqMaxLength = getRandNum(10, 5);
//   const toHide = getRandNum(seqMaxLength - 1);
  
//   let sequence = [];
//   let currentElement = seqBegin;

//   while (sequence.length < seqMaxLength) {
//     sequence.push(currentElement);
//     currentElement += step;
//   }
//   sequence[toHide] = '..';

//   return sequence.join(' ');
// };

// console.log(progression());
// ===========================




//  ========== ПОПЫТКА 1 ==========
// const progression = () => {
//   let step = getRandNum(10);
//   let seqBegin = getRandNum(100);
//   let seqMaxLength = getRandNum(10, 5);
  
//   let sequence = [];
//   let currentElement = seqBegin;

//   while (sequence.length < seqMaxLength) {
//     sequence.push(currentElement);
//     currentElement += step;
//   }

//   return sequence.join(' ');
// };

// console.log(progression());


// const getTask = () => {
//   const sequence = progression();
//   const toHide = getRandNum(sequence.length - 1);
//   const result = sequence[toHide];

//   console.log(sequence);
//   return result.toString();
// };

// console.log(getTask());
// ==================================


/*

`getTask()` должна возвращать строку вида:
5 7 9 11 13 .. 17 19 21 23

`getCorrectAnswer()` должна возвращать число,
которое в этой строке заменилось на '..'

*/

// ============== ВОЗМОЖНОЕ РЕШЕНИЕ ==============
// Присвойте вопрос и ответ отдельным константам
// и создайте на их основе пару с помощью конструктора cons.
// https://habr.com/ru/companies/wirex/articles/419193/



const setGameData = () => {
  let step = getRandNum(10);
  let seqBegin = getRandNum(100);
  let seqMaxLength = getRandNum(10, 5);
  const toHide = getRandNum(seqMaxLength - 1);
  
  let sequence = [];
  let currentElement = seqBegin;

  while (sequence.length < seqMaxLength) {
    sequence.push(currentElement);
    currentElement += step;
  }
  const answer = sequence[toHide];
  sequence[toHide] = '..';
  const question = sequence.join(' ');

  return [question, answer];

};


// const progr = progression();
// console.log(progr);

// const [question, answer] = progr;
// console.log(question);
// console.log(answer);



// const getTask = () => {
//   return progression().join(' ');
// };
// const question = getTask();

// console.log(question);
// console.log(question.length);

// const getCorrectAnswer = () => {
//   const array = question.split(' ');
//   const empty = '..';

//   let step = 0;
//   let result = 0;

//   let first = 0;
//   let second = 1;

//   // Перебираем массив
//   // Как только текущий элемент массива === '..'
//   // находим ближайшие два подряд идущих элемента
//   //  и вычитаем: элемент2 - элемент1
//   //  но для этого проверяем, не является ли элемент '..'
//   //  первым, вторым, предпоследним или последним

//   while (result === 0) {
//     if (array[first] && array[second] !== empty) {
//       step = array[second] - array[first];
//     } else {
//       first += 2;
//       second += 2;
//     }
//   }


//   return result;
// };

// console.log(getCorrectAnswer());
// // console.log(getCorrectAnswer()[1] === '..');


const playBrainProgression = startGame(rules, setGameData);
export { playBrainProgression };