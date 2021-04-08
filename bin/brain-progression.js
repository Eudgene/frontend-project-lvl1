#!/usr/bin/env node

import makeProgression from '../games/make-progression.js';
import Engine from '../src/index.js';

const answer = 'What number is missing in the progression?';
Engine(answer, makeProgression);
