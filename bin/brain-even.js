#!/usr/bin/env node

import readlineSync from 'readline-sync';
//import getRandomInt from './make-randomnumber.js';
//import {isNumberIsEven} from './make-randomnumber.js';
import {makeResult} from './make-result.js';

console.log('Welcome to the Brain Games!');

export const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
makeResult();
/*const randomnumber = getRandomInt(100);
const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);

let counter = 0;
if(answer === isNumberIsEven(randomnumber) && counter !== 3) {
  console.log('Correct!');
  counter += 1;
  const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
} else {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was ${answer === 'yes' ? '"no"' : '"yes"'}.\nLet's try again, ${name}!`);
}*/
