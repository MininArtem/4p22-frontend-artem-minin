'use strict'

let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let operator = document.getElementById('operator');
const btn = document.getElementById('submitButton');
let result = document.getElementById('result');
result.readOnly = true;

btn.addEventListener('click', (event) => {
  event.preventDefault();
  switch (operator.value) {
    case '*':
      result.value = firstNumber.value * secondNumber.value;
      break;
  }
});





