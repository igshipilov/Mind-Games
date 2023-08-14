#!/usr/bin/env node

import startGame from '../src/index.js';
import { rules, setQuestionAnswer } from '../src/games/brain-progression.js';

startGame(rules, setQuestionAnswer);
