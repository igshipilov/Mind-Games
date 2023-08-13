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
//   const hidden = sequence[toHide];
//   sequence[toHide] = '..';

//   return {
//     result: sequence.join(' '),
//     hidden: hidden,
//   };
// };


const getTask = () => {
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
  const hidden = sequence[toHide];
  sequence[toHide] = '..';

  const output = {
    result: sequence.join(' '),
    hidden: hidden,
  };

  return output.result;
};

console.log(getTask());

const getCorrectAnswer = (task = getTask) => {
  console.log(task);  
};

// console.log(getCorrectAnswer());
getCorrectAnswer();

// const playBrainProgression = startGame(rules, getTask, getCorrectAnswer);
// export { playBrainProgression };