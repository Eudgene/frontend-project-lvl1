function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function isNumberIsEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export { getRandomInt, isNumberIsEven };
