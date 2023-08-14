/*

# Задача

Генерируем число и выводим в консоль в формате:
Question: 15

Пользователь отвечает "yes" или "no", на экран это выводится в формате:
Your answer: yes

Если пользователь ошибся, на экран выводится:
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!

И игра завершается.
Ошибкой считается любой некорректный ввод.

Если пользователь ответил правильно, на экран выводится:
Correct!

И переходим к следующему шагу.


# Логика

Вывести на экран приветствие

Вывести на экран вопрос

Вычислить, является ли сгенерированное число чётным – isEven
    true если чётное
    false если нечётное

Ждать ввод от пользователя
Считать ответ (STDIN?) – userAnswer
    вернуть true если получено 'yes'
    вернуть false если получено 'no'

Сравнить ответ/ввод пользователя с правильным ответом
    если userAnswer === isEven

Вывести на экран соответствующую реакцию (см. выше)

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
