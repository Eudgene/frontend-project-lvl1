import readlineSync from 'readline-sync';
import {
  getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression, makeGcdNumber,
  makeProgressionNumber, makeProgressionArray, makeProgressionNewArray, makePrimeNumber,
} from './make-randomnumber.js';

function makeResult() {
  const randomnumber = getRandomInt(0, 10);
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
  const randomnumber1 = getRandomInt(0, 10);
  const randomnumber2 = getRandomInt(0, 10);
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

export function makeProgression() {
  const arr = makeProgressionArray();
  const ynanswer = makeProgressionNumber(arr);
  const newArr = makeProgressionNewArray(arr, ynanswer);
  const answer = readlineSync.question(`Question: ${newArr.join(' ')} `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export function makePrime() {
  const randomnumber1 = getRandomInt(0, 100);
  const ynanswer = makePrimeNumber(randomnumber1);
  const answer = readlineSync.question(`Question: ${randomnumber1} `);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export default makeResult;
