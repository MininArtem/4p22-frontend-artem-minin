'use strict'

const button = document.getElementById('submitButton');
let resultValue = document.getElementById('result');

button.addEventListener('click', (event) => {
  event.preventDefault();
  let firstNumber = document.getElementById('firstNumber').value;
  let secondNumber = document.getElementById('secondNumber').value;
  let operator = document.getElementById('operator').value;
  let result;
  const firstValue = Number(firstNumber);
  const secondValue = Number(secondNumber);

  switch (operator.trim()) {
    case '':
      result = 'Не введен знак';
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      if(secondValue === 0) {
        result = `Операция некорректна! <br> Нельзя делить на ноль`;
        break;
      } else {
        result = firstValue / secondValue;
        break;
      }
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;;
      break;
    default:
      result = 'Программа не поддерживает такую операцию';
      break;
    }

  if (firstNumber.trim() === '') {
    result = 'Не указано первое число'; 
  }
  if(secondNumber.trim() === '') {
    result = 'Не указано второе число';
  }
  if(isNaN(firstNumber) || isNaN(secondNumber)) {
    result = 'Некорректный ввод чисел';
  }
  if (result === Infinity || result === -Infinity) {
    result = 'Операция некорректна';  
  } else {
    resultValue.innerHTML = result;
  }
});
