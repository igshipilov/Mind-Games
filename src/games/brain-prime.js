// --- обслуживающие функции ---

const genRandNum = () => {
  const digits = 10;
  const randNum = Math.random() * digits;

  return Math.floor(randNum);
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
  }
  return 'yes';
};

// -----------------------------^

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setQuestionAnswer = () => {
  const question = genRandNum();
  const answer = isPrime(question);

  return [question, answer];
};

export { rules, setQuestionAnswer };
