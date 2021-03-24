#!/usr/bin/env node

//import { name } from './take-name-of-user.js';
//import { answers, index } from './take-answer.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);

const answers = ['Yes', 'No'];
const index = readlineSync.keyInSelect(answers, 'Answer "yes" if the number is even, otherwise answer "no". Question: 15');
//console.log(`${answers[index]}`);
