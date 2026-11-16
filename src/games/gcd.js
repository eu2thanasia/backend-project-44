const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getGcd = (a, b) => {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default {
  rules: "Find the greatest common divisor of given numbers.",
  getQuestionAndAnswer,
};
