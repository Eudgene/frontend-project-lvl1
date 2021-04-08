#!/usr/bin/env node

import { makeGcd } from '../games/check-gcd.js';
import Engine from '../src/index.js';

const answer = 'Find the greatest common divisor of given numbers.';
Engine(answer, makeGcd);
