#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt, isNumberIsEven } from './make-randomnumber.js';
import makeResult from './make-result.js';

console.log('Welcome to the Brain Games!');

export const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
const randomnumber = getRandomInt(100);
const ynanswer = isNumberIsEven(randomnumber);
const answer = readlineSync.question(`Question: ${randomnumber}\nYour answer: `);
console.log(answer, ynanswer);
makeResult(ynanswer, answer, counter);

