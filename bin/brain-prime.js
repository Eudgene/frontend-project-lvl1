#!/usr/bin/env node

import makeResult from '../games/make-result.js';
import Engine from '../src/index.js';

const answer = 'Answer "yes" if given number is prime. Otherwise answer "no".';
Engine(answer, makeResult);
