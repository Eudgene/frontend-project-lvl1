#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {makeResult} from './make-result.js';

console.log('Welcome to the Brain Games!');

export const name = readlineSync.question('May I have your name? ');
console.log(`Hi, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
makeResult();
