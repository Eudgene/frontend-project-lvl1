import { randomnumber } from './brain-even.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export function isNumberIsEven(randomnumber) {
  if(randomnumber % 2 === 0) {
    return 'yes';
  } else {
    return 'no';
  }
}

export default getRandomInt;
