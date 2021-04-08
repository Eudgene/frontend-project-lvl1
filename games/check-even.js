import readlineSync from 'readline-sync';
import getRandomInt from './make-randomnumber.js';

function isNumberIsEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

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

export default makeResult;
