#!/usr/bin/env node

import makeResult from '../games/check-even.js';
import Engine from '../src/index.js';

const answer = 'Answer "yes" if the number is even, otherwise answer "no".';
Engine(answer, makeResult);
