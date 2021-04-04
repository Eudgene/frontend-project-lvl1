import readlineSync from 'readline-sync';
import {
  getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression, makeGcdNumber,
} from './make-randomnumber.js';

function makeResult() {
  const randomnumber = getRandomInt(10);
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
  const randomnumber1 = getRandomInt(10);
  const randomnumber2 = getRandomInt(10);
  const mathexpression = getRandomElement();
  const ynanswer = resultOfExpression(randomnumber1, randomnumber2, mathexpression);
  const answer = readlineSync.question(`Question: ${randomnumber1} ${mathexpression} ${randomnumber2}\nYour answer: `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export function makeGcd() {
  const randomnumber1 = getRandomInt(100);
  const randomnumber2 = getRandomInt(100);
  const ynanswer = makeGcdNumber(randomnumber1, randomnumber2);
  const answer = readlineSync.question(`Question: ${randomnumber1} ${randomnumber2}\nYour answer: `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export default makeResult;
