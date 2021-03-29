#!/usr/bin/env node

import makeResult from './make-result.js';
import * as name from './get-name.js';

console.log('Welcome to the Brain Games!');
console.log(name.nameOfUser());
console.log(`Hi, ${name.nameOfUser}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 2) {
  counter += 1;
  makeResult();
}
makeResult();
console.log(`Congratulations, ${name.nameOfUser}!`);
