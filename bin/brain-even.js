#!/usr/bin/env node

//import { name } from './take-name-of-user.js';
//import { answers, index } from './take-answer.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);
//console.log(`${answers[index]}`);
