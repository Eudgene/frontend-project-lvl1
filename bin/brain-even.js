#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from './make-randomnumber.js';
import {isNumberIsEven} from './make-randomnumber.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomnumber = getRandomInt(100);
const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);

if(answer === isNumberIsEven(randomnumber)) {
  console.log('Correct!')
  //const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
} else {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${answer === 'yes' ? '"no"' : '"yes"'}.\nLet's try again, ${name}!`);
}

export {randomnumber, answer};