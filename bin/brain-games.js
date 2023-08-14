#!/usr/bin/env node

// line with shebang (#!) means: "execute file as node.js command,
// using env to get the path to the interpreter file".

import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
greetUser();
