

function makeResult(number, ans, count) {
    if (ans === number && count < 2) {
      console.log('Correct!');
      counter += 1;
      makeResult();
    } else if (ans === number && count === 2) {
      console.log(`Correct! \nCongratulations, ${name}!`);
    } else {
      console.log(`"${ans}" is wrong answer ;(. Correct answer was "${number}".\nLet's try again, ${name}!`);
    }
  }

export default makeResult;