// var readlineSync = require('readline-sync');
import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
};

export default userName;
