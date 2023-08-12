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

const getTask = () => {
  const digits = 100;
  const generateNum = Math.random() * digits;
  const result = Math.floor(generateNum);
  return result;
};

export default (userAnswer) => {
  for (let i = 0; i < 3; i += 1) {
    const question = getTask();

    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      return true;
    }
    return false;
  }
};

// export default checkResult;