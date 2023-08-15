/*

# TASK

We generate a number and output it to the console in the format:
Question: 15

The user answers "yes" or "no", this is displayed on the screen in the format:
Your answer: yes

If the user makes a mistake, the screen displays:
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!

And the game ends.
Any incorrect input is considered an error.

If the user answered correctly, the screen displays:
Correct!

And we move on to the next step.


# LOGIC

Display welcome screen

Display a question

Calculate if generated number is even - isEven
     true if even
     false if odd

Wait for user input
Read answer (STDIN?) – userAnswer
     return true if received 'yes'
     return false if received 'no'

Compare user's answer/input with correct answer
     if userAnswer === isEven

Display the corresponding reaction on the screen (see above)

*/

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const correctAnswer = number => number % 2 === 0;

const setQuestionAnswer = () => {
  const digits = 100;
  const randNum = Math.random() * digits;

  const question = Math.floor(randNum);
  const answer = correctAnswer(question) ? 'yes' : 'no';

  return [question, answer];
};

export { rules, setQuestionAnswer };

// ============ OLD 'TWO-FUNC' SOLUTION ===============

// // Выведется на экран как Question: генерирует и возвращает число:
// const getTask = () => {
//   const digits = 100;
//   const randNum = Math.random() * digits;
//   const result = Math.floor(randNum);

//   return result;
// };

// // Возвращает 'yes' если полученное число чётное, 'no' если нечётное:
// // сравнивается с userAnswer
// const getCorrectAnswer = (task) => {
//   const result = task % 2 === 0 ? 'yes' : 'no';

//   return result;
// };

// =====================================================
