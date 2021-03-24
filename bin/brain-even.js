#!/usr/bin/env node

import name from './take-name-of-user.js';


console.log('Welcome to the Brain Games!');
console.log(`Hi, ${name}!`);
import { answers, index } from './take-answer.js';
console.log(`${answers[index]}`);
