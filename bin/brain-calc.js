#!/usr/bin/env node

import { makeCalc } from './make-result.js';
import Engine from '../src/index.js';

const answer = 'What is the result of the expression?';
Engine(answer, makeCalc);
/*console.log('Welcome to the Brain Games!');
const nameOfUser = getnameOfUser();
console.log(`Hi, ${nameOfUser}!`);

console.log('What is the result of the expression?');

for (let counter = 0; counter <= 3; counter += 1) {
  if (counter < 3) {
    if (makeCalc() === false) {
      console.log(`Let's try again, ${nameOfUser}!`);
      break;
    }
  } else if (counter === 3) {
    console.log(`Congratulations, ${nameOfUser}!`);
  }
}*/
