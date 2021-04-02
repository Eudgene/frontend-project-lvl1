#!/usr/bin/env node

import makeResult from './make-result.js';
import Engine from '../src/index.js';

const answer = 'Answer "yes" if the number is even, otherwise answer "no".';
Engine(answer, makeResult);
/*console.log('Welcome to the Brain Games!');
const nameOfUser = getnameOfUser();
console.log(`Hi, ${nameOfUser}!`);

console.log();

for (let counter = 0; counter <= 3; counter += 1) {
  if (counter < 3) {
    if ( === false) {
      console.log(`Let's try again, ${nameOfUser}!`);
      break;
    }
  } else if (counter === 3) {
    console.log(`Congratulations, ${nameOfUser}!`);
  }
}*/
