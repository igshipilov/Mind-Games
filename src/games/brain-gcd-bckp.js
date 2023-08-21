import getRandomNum from "../utils.js";
import startGame from "../index.js";

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const maxNumber = 100;
  const num1 = getRandomNum(maxNumber);
  const num2 = getRandomNum(maxNumber);

  const question = `${num1} ${num2}`;

  let first = num1;
  let second = num2;

  if (first === 0 && second === 0) {
    return [question, 0];
  } if (first === 0 && second !== 0) {
    return [question, second];
  }
  if (first !== 0 && second === 0) {
    return [question, first];
  }
  if (first % second === 0) {
    return [question, second];
  }

  let reminder = first % second;

  while (reminder > 0) {
    first = second;
    second = reminder;
    reminder = first % second;
  }

  const answer = second.toString();

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
