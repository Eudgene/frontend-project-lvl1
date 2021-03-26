#!/usr/bin/env node
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';
import readlineSync from 'readline-sync';
import makeResult from './make-result.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
//makeResult();

//export default name;
let counter = 0;
function makeResult() {
  const randomnumber = getRandomInt(100);
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
  if (answer === isNumberIsEven(randomnumber) && counter < 2) {
    console.log('Correct!');
    counter += 1;
    makeResult();
  } else if (answer === isNumberIsEven(randomnumber) && counter === 2) {
    console.log(`Correct! \nCongratulations, ${name}!`);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isNumberIsEven(randomnumber)}".\nLet's try again, ${name}!`);
  }
}
makeResult();