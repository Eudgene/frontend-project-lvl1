import readlineSync from 'readline-sync';
import { getRandomInt } from './make-randomnumber.js';

function makePrimeNumber(num) {
  const arr = [];
  let result = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}

function makePrime() {
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

export default makePrime;