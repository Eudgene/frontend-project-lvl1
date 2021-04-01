function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomElement() {
  var elements = ['+', '-', '*'];
  return elements[Math.floor(Math.random() * elements.length)];
}

function isNumberIsEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function resultOfExpression(number1, number1, mexpr) {
  let result = 0;
  if (mexpr === '+') {
    result = number1 + number1;
  } else if (mexpr === '-') {
    result = number1 - number1;
  } else {
    result = number1 * number1;
  }
  return result;
}

export { getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression};
