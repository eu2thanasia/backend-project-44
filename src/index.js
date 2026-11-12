const playGame = (game, name, roundsCount, readlineSync) => {
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = game.getQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question("Your answer: ");

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
