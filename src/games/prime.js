const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const question = String(number);
  const correctAnswer = isPrime(number) ? "yes" : "no";

  return [question, correctAnswer];
};

export default {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndAnswer,
};
