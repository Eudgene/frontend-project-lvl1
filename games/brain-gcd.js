#!/usr/bin/env node

import { makeGcd } from '../bin/make-result.js';
import Engine from '../src/index.js';

const answer = 'Find the greatest common divisor of given numbers.';
Engine(answer, makeGcd);
