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
  if (operator === "+") {
    return add(a,b);
  } else if (operator ==="-") {
    return subtract(a,b);
  } else if (operator === "*") {
    return multiply(a,b);
  } else if (operator === "/") {
    return divide(a,b);
  }
}



