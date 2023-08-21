import getRandomNum from "../utils.js";
import startGame from "../index.js";

const rules = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  const lengthMax = 10;
  const lengthMin = 5;

  const step = getRandomNum(lengthMax);
  const seqBegin = getRandomNum(100);
  const seqMaxLength = getRandomNum(lengthMax, lengthMin);
  const hiddenNum = getRandomNum(seqMaxLength - 1);

  const sequence = [];
  let currentElement = seqBegin;

  while (sequence.length < seqMaxLength) {
    sequence.push(currentElement);
    currentElement += step;
  }
  const answer = sequence[hiddenNum];
  sequence[hiddenNum] = '..';
  const question = sequence.join(' ');

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
