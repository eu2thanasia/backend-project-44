const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(question) ? "yes" : "no";

  return [question, correctAnswer];
};

export default {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionAndAnswer,
};
