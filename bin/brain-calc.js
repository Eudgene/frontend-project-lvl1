#!/usr/bin/env node

import { makeCalc } from '../games/make-result.js';
import Engine from '../src/index.js';

const answer = 'What is the result of the expression?';
Engine(answer, makeCalc);
