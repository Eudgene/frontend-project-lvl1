#!/usr/bin/env node

import readlineSync from 'readline-sync';
import makeResult from './make-result.js';

console.log('Welcome to the Brain Games!');

function name() {
  return readlineSync.question('May I have your name? ');
}
console.log(`Hi, ${name()}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 2) {
  counter += 1;
  makeResult();
}
makeResult();
console.log(`Congratulations, ${name}!`);

export default name;
