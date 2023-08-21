import getRandomNum from '../utils.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const correctAnswer = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const maxNumber = 100;
  const randNum = getRandomNum(maxNumber);

  const question = Math.floor(randNum);
  const answer = correctAnswer(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
