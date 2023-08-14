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


# ВКРАТЦЕ

`getTask()` должна возвращать строку вида:
5 7 9 11 13 .. 17 19 21 23

`getCorrectAnswer()` должна возвращать число,
которое в этой строке заменилось на '..'


*/

// --- обслуживающие функции ---
const rules = 'What is the result of the expression?';

const genRandNum = (max = 10, min = 1) => {
  const randNum = Math.random() * (max - min) + min;

  return Math.floor(randNum);
};

// -----------------------------^

const setQuestionAnswer = () => {
  const lengthMax = 10;
  const lengthMin = 5;

  const step = genRandNum(10);
  const seqBegin = genRandNum(100);
  const seqMaxLength = genRandNum(lengthMax, lengthMin);
  const toHide = genRandNum(seqMaxLength - 1);

  const sequence = [];
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

export { rules, setQuestionAnswer };
