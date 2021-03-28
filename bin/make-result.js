import readlineSync from 'readline-sync';
import { name } from './brain-even.js';
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';


function makeResult() {
  const randomnumber = getRandomInt(100);
  const ynanswer = isNumberIsEven(randomnumber);
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
  if (answer === ynanswer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".\nLet's try again, ${name}!`);
  }
}

export default makeResult;