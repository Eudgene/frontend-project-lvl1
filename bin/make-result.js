

function makeResult(number, ans, count) {
    if (ans === isNumberIsEven(number) && count < 2) {
      console.log('Correct!');
      counter += 1;
      makeResult();
    } else if (ans === isNumberIsEven(number) && count === 2) {
      console.log(`Correct! \nCongratulations, ${name}!`);
    } else {
      console.log(`"${ans}" is wrong answer ;(. Correct answer was "${isNumberIsEven(number)}".\nLet's try again, ${name}!`);
    }
  }

export default makeResult;