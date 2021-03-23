#!/usr/bin/env node

import name from '../bin/take-name-of-user.js';
import {answers, index} from '../bin/take-answer.js';

console.log('Welcome to the Brain Games!');
console.log(`Hi, ${name}!`);
console.log(`${answers[index]}`);