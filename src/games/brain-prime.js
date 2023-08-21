import getRandomNum from '../utils.js';
import startGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }

  const stop = num / 2;

  for (let i = 2; i <= stop; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
