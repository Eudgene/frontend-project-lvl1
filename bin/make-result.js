import readlineSync from 'readline-sync';
import getnameOfUser from './get-name.js';
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';


function makeResult() {
  const randomnumber = getRandomInt(100);
  const ynanswer = isNumberIsEven(randomnumber);
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
  if (answer === ynanswer) {
    console.log('Correct!');
  } else {
    const nameOfUser = getnameOfUser();
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".\nLet's try again, ${nameOfUser}!`);
  }
}

export default makeResult;
