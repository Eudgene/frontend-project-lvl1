import readlineSync from 'readline-sync';
//import getnameOfUser from './get-name.js';
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';

//const nameOfUser = getnameOfUser();
let counter = 0;
function makeResult() {
  const randomnumber = getRandomInt(100);
  const ynanswer = isNumberIsEven(randomnumber);
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
  if (answer === ynanswer) {
    if (counter < 2) {
      console.log('Correct!');
      counter += 1;
      makeResult();
    } else if (counter === 2) {
      console.log(`Congratulations, ${nameOfUser}!`);
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".\nLet's try again, ${nameOfUser}!`);
  }
}

export default makeResult;
