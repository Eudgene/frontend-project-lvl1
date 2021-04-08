function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*function makeGcdNumber(number1, number2) {
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
}*/

function makeProgressionNumber(arr) {
  const randomnumber1 = getRandomInt(0, 9);
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
  const randomnumber1 = getRandomInt(0, 3);
  const randomnumber2 = getRandomInt(3, 7);
  const arr = [];
  for (let i = 0; i <= 9; i += 1) {
    if (i === 0) {
      arr.push(randomnumber1);
    } else if (i === 1) {
      arr.push(randomnumber2);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

function makePrimeNumber(num) {
  const arr = [];
  let result = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}

export {
  getRandomInt,
  makeProgressionNumber, makeProgressionArray, makeProgressionNewArray, makePrimeNumber,
};
