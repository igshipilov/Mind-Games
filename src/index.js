
import readlineSync from 'readline-sync';

const maxRounds = 3;

const startGame = (rules, setQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < maxRounds; i += 1) {
    const [question, answer] = setQuestionAnswer();
    const correctAnswer = answer.toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
