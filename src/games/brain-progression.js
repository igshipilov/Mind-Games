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


# LOGIC

step = random single digit
seqBegin = random number (let's not exceed two digits)
seqMaxLength = random number between 5 and 10
sequence = array with numbers
toHide = random number from 0 to `seqMaxLength - 1`

Starting with seqBegin
Stepping while sequence.length < seqMaxLength:
   sequence.push(seqBegin);
   seqBegin = seqBegin + step;

When sequence.length = seqMaxLength:
   sequence[toHide] = '..';
   return sequence.join(' ');


# IN SHORT

`getTask()` should return a string like:
5 7 9 11 13 .. 17 19 21 23

`getCorrectAnswer()` should return the number
which in this line is replaced by '..'


*/

// -------- calculations --------

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
