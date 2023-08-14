#!/usr/bin/env node

import startGame from '../src/index.js';
import { rules, setQuestionAnswer } from '../src/games/brain-prime.js';

startGame(rules, setQuestionAnswer);
