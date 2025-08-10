function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return Math.round((a / b) * 100) / 100;
}

function operate(a, b, operator){
  switch (operator) {
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "*":
      return multiply(a,b);
    case "/":
      return divide(a,b);
    default:
      return null;
  }
}

let firstNum = '';
let secondNum = '';
let operator = '';


const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-output");



