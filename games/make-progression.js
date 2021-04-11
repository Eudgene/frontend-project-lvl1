import readlineSync from 'readline-sync';
import getRandomInt from './make-randomnumber.js';

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
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i] === answer && count === 0) {
      newArr.push('..');
      count += 1;
    } else {
      newArr.push(String(arr[i]));
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

function makeProgression() {
  const arr = makeProgressionArray();
  const ynanswer = makeProgressionNumber(arr);
  const newArr = makeProgressionNewArray(arr, ynanswer);
  console.log(typeof ynanswer);
  const answer = readlineSync.question(`Question: ${newArr.join(' ')} \nYour answer: `);
  console.log(typeof answer);
  if (answer === String(ynanswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${ynanswer}".`);
  return false;
}

export default makeProgression;
