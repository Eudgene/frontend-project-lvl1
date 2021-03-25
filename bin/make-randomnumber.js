import { randomnumber } from './brain-even.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
function isNumberIsEven(randomnumber) {
  if(randomnumber%2 === 0) {
    return 'yes';
  }
  return 'no';
}
console.log(isNumberIsEven());

export default getRandomInt;
