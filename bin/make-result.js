import { isNumberIsEven } from './make-randomnumber.js';
import { name } from './brain-even.js';

function makeResult(number, ans, count) {
    if (ans === isNumberIsEven(number) && count < 2) {
      console.log('Correct!');
      count += 1;
      makeResult();
    } else if (ans === isNumberIsEven(number) && count === 2) {
      console.log(`Correct! \nCongratulations, ${name}!`);
    } else {
      console.log(`"${ans}" is wrong answer ;(. Correct answer was "${isNumberIsEven(number)}".\nLet's try again, ${name}!`);
    }
  }

export default makeResult;