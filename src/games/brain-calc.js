/*

Generate two different numbers
Perform operation + or - or *
Remember result
Print the same numbers to the console with the same operation
Accept response from user

If the answer doesn't match:

1. return: 'USER_REPLY' is wrong answer ;(. Correct answer was 'CORRECT_ANSWER'.
Let's try again, USERNAME!

2. Finish the game

If the answer matches:
1. return: Correct!
2. And go to the next step.

After the third successful round, output:
Congratulations, USERNAME!

*/

// -------- calculations --------

const genRandNum = () => {
  const digits = 10;
  const randNum = Math.random() * digits;

  return Math.floor(randNum);
};

const operators = ['+', '-', '*'];

const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getOperator = () => {
  const operatorsQuantity = Object.keys(expressions).length;

  const rand = (Math.random() * operatorsQuantity);
  const result = Math.floor(rand);

  return operators[result];
};

// -----------------------------^

const rules = 'What is the result of the expression?';

const setQuestionAnswer = () => {
  const num1 = genRandNum();
  const num2 = genRandNum();
  const operator = getOperator();

  const question = `${num1} ${operator} ${num2}`;

  const result = expressions[operator](Number(num1), Number(num2));
  const answer = result.toString();

  return [question, answer];
};

export { rules, setQuestionAnswer };

// ============ OLD 'TWO-FUNC' SOLUTION ===============
// // displays as 'Question: ' -> returns an expression, for e.g. 5 + 2
// const getTask = () => {
//   const num1 = genRandNum();
//   const num2 = genRandNum();
//   const operator = getOperator();

//   return `${num1} ${operator} ${num2}`;
// };

// // in ENGINE (index.js) this func receives getTask() func as argument,
// // calculates it and than this func's result compares with 'userAnswer'
// const getCorrectAnswer = (task) => {

//   const [num1, operator, num2] = task.split(' ');
//   const result = expressions[operator](Number(num1), Number(num2));

//   return result.toString();
// };
// =====================================================
