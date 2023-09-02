'use strict'

const { runProcess } = require('../utils/helpers');

//? Storing 1 to 1000 numbers into an array
const nums = new Array(1000).fill(0).map((v, i) => i + 1);

function runTernaryOperatorVsIfElseProcess() {
  console.log('Starting ternary operator vs if-else test.....');
  runProcess(usingTernaryOperator, usingIfElse);
  console.log('Process finished!\n');
}

function usingTernaryOperator() {
  let isEven;

  for (let num of nums) {
    isEven = (num % 2) ? false : true;
  }
}

function usingIfElse() {
  let isEven;

  for (let num of nums) {
    if (num % 2) isEven = false;
    else isEven = true;
  }
}

module.exports = {
  runTernaryOperatorVsIfElseProcess,
};