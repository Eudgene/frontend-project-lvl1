import readlineSync from 'readline-sync';
import { getRandomInt } from './make-randomnumber.js';

function makeGcdNumber(number1, number2) {
  let result = 0;
  for (let del = number1; del >= 0; del -= 1) {
    if (number1 % del === 0) {
      if (number2 % del === 0) {
        result = del;
        break;
      }
    }
  }
  return result;
}

export function makeGcd() {
  const randomnumber1 = getRandomInt(0, 100);
  const randomnumber2 = getRandomInt(0, 100);
  const ynanswer = makeGcdNumber(randomnumber1, randomnumber2);
  const answer = readlineSync.question(`Question: ${randomnumber1} ${randomnumber2}\nYour answer: `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}
