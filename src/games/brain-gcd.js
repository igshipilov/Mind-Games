import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let first = num1;
  let second = num2;

  if (first === 0 && second === 0) {
    return 0;
  } if (first === 0 && second !== 0) {
    return second;
  }
  if (first !== 0 && second === 0) {
    return first;
  }
  if (first % second === 0) {
    return second;
  }

  let reminder = first % second;

  while (reminder > 0) {
    first = second;
    second = reminder;
    reminder = first % second;
  }

  const answer = second.toString();

  return answer;
};

const getQuestionAnswer = () => {
  const maxNumber = 100;
  const num1 = getRandomNum(maxNumber);
  const num2 = getRandomNum(maxNumber);

  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
