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

export { 
  getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression 
};
