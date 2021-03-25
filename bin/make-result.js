import readlineSync from 'readline-sync';
import getRandomInt from './make-randomnumber.js';
import {isNumberIsEven} from './make-randomnumber.js';

let counter = 0;
export function makeResult() {
    const randomnumber = getRandomInt(100);
    const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
    
    if(answer === isNumberIsEven(randomnumber) && counter <= 2) {
      console.log('Correct!');
      counter += 1;
      console.log(counter);
      makeResult();
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was ${answer === 'yes' ? '"no"' : '"yes"'}.\nLet's try again, ${name}!`);
    }
}


