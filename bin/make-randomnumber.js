function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export function isNumberIsEven(number) {
  if(number % 2 === 0) {
    return 'yes';
  } else {
    return 'no';
  }
}

export default getRandomInt;
