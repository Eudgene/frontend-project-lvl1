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
  for (let del = number1; del >= 0; del -= 1) {
    if (number1 % del === 0) {
      if (number2 % del === 0) {
        result = del;
        break;
      }
    }
  }
  return result;
}

function makeProgressionNumber(arr) {
  let result = 0;
  for (let i = 1; i <= arr.length; i += 1) {
    if (arr[i] === '..') {
      result = arr[i - 1] + arr[i - 2];
    }
  }
  return result;
}

function makeProgressionArray() {
  const randomnumber1 = getRandomInt(4);
  const randomnumber2 = getRandomInt(4);
  const arr = [];
  arr.push(randomnumber1);
  arr.push(randomnumber1 + randomnumber2);
  for (let i = 1; i <= 8; i += 1) {
    if (i === randomnumber1 - 1) {
      arr.push('..');
    }
    arr.push(arr[i-1] + arr[i]);
  }
  return arr;
}

export {
  getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression, makeGcdNumber, makeProgressionNumber, makeProgressionArray,
};
