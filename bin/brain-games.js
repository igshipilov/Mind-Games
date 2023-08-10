#!/usr/bin/env node

// строка с шебанг (#!) означает: "выполнить файл как команду node.js,
// используя env для получения пути к файлу интерпретатора.

import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
userName();
