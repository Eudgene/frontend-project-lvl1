import readlineSync from 'readline-sync';
import { getRandomInt } from './make-randomnumber.js';

function getRandomElement() {
  const elements = ['+', '-', '*'];
  return elements[Math.floor(Math.random() * elements.length)];
}

function resultOfExpression(number1, number2, mexpr) {
  let result = 0;
  if (mexpr === '+') {
    result = number1 + number2;
  } else if (mexpr === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  return result;
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
