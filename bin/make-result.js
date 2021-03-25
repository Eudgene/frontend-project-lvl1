import readlineSync from 'readline-sync';
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';
import name from './brain-even.js';

let counter = 0;
function makeResult() {
  const randomnumber = getRandomInt(100);
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
  if (answer === isNumberIsEven(randomnumber) && counter < 2) {
    console.log('Correct!');
    counter += 1;
    makeResult();
  } else if (answer === isNumberIsEven(randomnumber) && counter === 2) {
    console.log(`Correct! \nCongratulations, ${name}!`);
  } else {
    if (answer === 'yes' || answer === 'no') {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was ${answer === 'yes' ? '"no"' : '"yes"'}.\nLet's try again, ${name}!`);
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was ${isNumberIsEven(randomnumber) === 'yes' ? '"no"' : '"yes"'}.\nLet's try again, ${name}!`);
  }
}

export default makeResult;
