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
  const randomnumber1 = getRandomInt(9);
  let result = 0;
  for (let i = 0; i <= arr.length; i += 1) {
    if (i === randomnumber1) {
      result = arr[i];
    } 
  }
  return result;
}

function makeProgressionNewArray(arr, answer) {
  const newArr = [];
  let count = 0;
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] === answer && count === 0) {
      newArr.push('..');
      count += 1;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function makeProgressionArray() {
  const randomnumber1 = getRandomInt(3);
  const randomnumber2 = getRandomInt(3, 7);
  const arr = [];
  for (let i = 0; i <= 9; i += 1) {
    if (i === 0) {
      arr.push(randomnumber1);
    } else if (i === 1) {
      arr.push(randomnumber2);
    } else {
      arr.push(arr[i-1] + arr[i-2]);
    }
  }
  return arr;
}

export {
  getRandomInt, isNumberIsEven, getRandomElement, resultOfExpression, makeGcdNumber,
  makeProgressionNumber, makeProgressionArray, makeProgressionNewArray,
};
