function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomElement() {
  const elements = ['+', '-', '*'];
  return elements[Math.floor(Math.random() * elements.length)];
}

function isNumberIsEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function resultOfExpression(number1, number2, mexpr) {
  let result = 0;
  if (mexpr === '+') {
    result = number1 + number2;
  } else if (mexpr === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  return result;
}

function makeGcdNumber(number1, number2) {
  let result = 0;
  if (number1 % number2 === 0) {
    result = number2;
  } else if (number2 % number1 === 0) {
    result = number1;
  } else {
    for (let del = number1; del >= 0; del -= 1) {
      if (number1 % del === 0) {
        console.log(del);
        if (number2 % del === 0) {
          result = del;
          break;
        }
      }
    }
  }
  return result;
}

export {
  getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression, makeGcdNumber
};
