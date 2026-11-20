const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 1;
const MAX_STEP = 10;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomNumber(MIN_START, MAX_START);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);

  const progression = getProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = "..";

  const question = progression.join(" ");

  return [question, correctAnswer];
};

export default {
  rules: "What number is missing in the progression?",
  getQuestionAndAnswer,
};
