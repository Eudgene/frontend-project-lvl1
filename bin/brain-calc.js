#!/usr/bin/env node

import makeResult from './make-result.js';
import getnameOfUser from './get-name.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getnameOfUser();
console.log(`Hi, ${nameOfUser}!`);

console.log('What is the result of the expression?');

for (let counter = 0; counter <= 3; counter += 1) {
  if (counter < 3) {
    if (makeResult() === false) {
      console.log(`Let's try again, ${nameOfUser}!`);
      break;
    }
  } else if (counter === 3) {
    console.log(`Congratulations, ${nameOfUser}!`);
  }
}