import getRandomNum from "../utils.js";
import startGame from "../index.js";

const operators = ['+', '-', '*'];

const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getOperator = () => {
  const operatorsQuantity = Object.keys(expressions).length - 1;
  const rand = getRandomNum(operatorsQuantity);
  const result = Math.floor(rand);

  return operators[result];
};

const rules = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operator = getOperator();

  const question = `${num1} ${operator} ${num2}`;

  const result = expressions[operator](Number(num1), Number(num2));
  const answer = result.toString();

  return [question, answer];
};

export default () => { startGame(rules, getQuestionAnswer); };
