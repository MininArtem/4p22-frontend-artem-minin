'use strict'

function fibonacciFunction() {
  let currentState = 0;
  let nextState = 0;
  function makeFibonacciNumber() {
    if ((currentState + nextState) === 0) {
      nextState = 1;
    } else {
      [currentState, nextState] = [nextState, currentState + nextState];
    }
    return currentState;
  }
  return makeFibonacciNumber;
}

const fibonacci = fibonacciFunction();

document.getElementById('submitButton').addEventListener('click', (event) => {
  event.preventDefault();
  let resultValue = document.getElementById('result');
  resultValue.innerHTML = fibonacci();
  console.log(resultValue.innerHTML);
});