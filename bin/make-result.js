import readlineSync from 'readline-sync';
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';

function makeResult() {
  const randomnumber = getRandomInt(100);
  const ynanswer = isNumberIsEven(randomnumber);
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
  if (answer === ynanswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export function makeCalc() {
  const ynanswer = isNumberIsEven(randomnumber);
  const answer = readlineSync.question(`Question: ${getRandomInt(100)} '+' ${getRandomInt(100)}\nYour answer: `);
  if (answer === ynanswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export default makeResult;
