// -------- calculations --------

const genRandNum = () => {
  const digits = 100;
  const randNum = Math.random() * digits;

  return Math.floor(randNum);
};

// -----------------------------^

const rules = 'Find the greatest common divisor of given numbers.';


const setQuestionAnswer = () => {
  const num1 = genRandNum();
  const num2 = genRandNum();

  const question = `${num1} ${num2}`;

  let first = Number(num1);
  let second = Number(num2);

  if (first === 0 && second === 0) {
  return [question, 0];
  }  if (first === 0 && second !== 0) {
  return [question, second];
  }
  if (first !== 0 && second === 0) {
  return [question, first];
  }
  if (first % second === 0){
  return [question, second];
  }

  let reminder = first % second;

  while (reminder > 0) {
    first = second;
    second = reminder;
    reminder = first % second;
  }

  const answer = second.toString();

  return [question, answer];
};

export { rules, setQuestionAnswer };



// ----- TESTS ----------------------
// console.log(getCorrectAnswer(1680, 640)); // 80
// console.log(getCorrectAnswer(25, 50)); // 25
// console.log(getCorrectAnswer(100, 52)); // 4
// console.log(getCorrectAnswer(3, 9)); // 3
// ----------------------------------


// ----- find GCD one step ---------
// const a = 1680;
// const b = 640;

// const reminder = a % b;
// const integer = Math.floor(a / b);

// console.log(`===== EXAMPLE =====`)
// console.log(`R: ${reminder}`);
// console.log(`Q: ${integer}`);
// ----------------------------------


// ============ OLD 'TWO-FUNC' SOLUTION ===============

// const getTask = () => {
//   const num1 = genRandNum();
//   const num2 = genRandNum();

//   return `${num1} ${num2}`
// };

// // const task = getTask()
// // console.log(task);
// // console.log(task.split(' '));
// // console.log(typeof task.split(' ')[0]);

// const getCorrectAnswer = (task) => {
//   const [num1, num2] = task.split(' ');
//   let first = Number(num1);
//   let second = Number(num2);

//   if (first === 0 && second === 0) {
//     return 0;
//   }  if (first === 0 && second !== 0) {
//     return second;
//   }
//   if (first !== 0 && second === 0) {
//     return first;
//   }
//   if (first % second === 0){
//     return second;
//   }

//   let reminder = first % second;

//   while (reminder > 0) {
//     first = second;
//     second = reminder;
//     reminder = first % second;
//   }

//   return second.toString();
// };

// =====================================================
