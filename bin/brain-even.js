#!/usr/bin/env node

import makeResult from './make-result.js';
import getnameOfUser from './get-name.js';

console.log('Welcome to the Brain Games!');
const nameOfUser = getnameOfUser();
console.log(`Hi, ${nameOfUser}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let counter = 0; counter < 3; counter += 1) {
  if (counter < 2) {
    makeResult();
  } else if (counter === 2) {
    console.log(`Congratulations, ${nameOfUser}!`);
  }
}
