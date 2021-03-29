#!/usr/bin/env node

import makeResult from './make-result.js';
import trees from './get-name.js';

const { nameOfUser } = trees;
console.log('Welcome to the Brain Games!');

console.log(`Hi, ${nameOfUser}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 2) {
  counter += 1;
  makeResult();
}
makeResult();
console.log(`Congratulations, ${nameOfUser}!`);
