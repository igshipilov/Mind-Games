import { startGame } from "../index.js";

// --- обслуживающие функции ---

const getRandNum = () => {
  const digits = 10;
  const generateNum = Math.random() * digits;

  return Math.floor(generateNum);
};

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  if (num === 2 || num === 3) {
    return 'yes';
  }

  const stop = num / 2;
  
  for (let i = 2; i <= stop; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  };
  return 'yes';
};

// console.log(isPrime(6));

// -----------------------------^

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setGameData = () => {
  const question = getRandNum();
  const answer = isPrime(question);

  return [question, answer];
};

// console.log(setGameData());

const playBrainPrime = startGame(rules, setGameData);

export { playBrainPrime };