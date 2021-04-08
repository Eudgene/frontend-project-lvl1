import readlineSync from 'readline-sync';
import {
  getRandomInt, makePrimeNumber,
} from './make-randomnumber.js';

/*export function makeProgression() {
  const arr = makeProgressionArray();
  const ynanswer = makeProgressionNumber(arr);
  const newArr = makeProgressionNewArray(arr, ynanswer);
  const answer = readlineSync.question(`Question: ${newArr.join(' ')} \nYour answer: `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}*/

export function makePrime() {
  const randomnumber1 = getRandomInt(2, 100);
  const ynanswer = makePrimeNumber(randomnumber1);
  const answer = readlineSync.question(`Question: ${randomnumber1} \nYour answer: `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}
