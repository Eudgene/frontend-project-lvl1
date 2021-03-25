import { randomnumber } from './brain-even.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export let numberYesNo;
export function isNumberIsEven(randomnumber) {
  if(randomnumber % 2 === 0) {
    numberYesNo = 'yes';
  }
  numberYesNo = 'no';
  return numberYesNo;
}

export default getRandomInt;
