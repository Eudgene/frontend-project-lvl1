import { randomnumber } from './brain-even.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
const numberYesNo;
function isNumberIsEven(randomnumber) {
  if(randomnumber%2 === 0) {
    numberYesNo = 'yes';
  }
  numberYesNo = 'no';
  return numberYesNo;
}
console.log(isNumberIsEven());

export default getRandomInt;
