const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  const index = Math.floor(Math.random() * operators.length);

  return operators[index];
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;

  let correctAnswer;

  switch (operator) {
    case "+":
      correctAnswer = firstNumber + secondNumber;
      break;
    case "-":
      correctAnswer = firstNumber - secondNumber;
      break;
    case "*":
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      return null;
  }

  return [question, String(correctAnswer)];
};

export default {
  rules: "What is the result of the expression?",
  getQuestionAndAnswer,
};
