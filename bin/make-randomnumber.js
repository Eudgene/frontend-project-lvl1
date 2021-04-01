function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomElement() {
  var elements = ['+', '-', '*'];
  return elements[Math.floor(Math.random() * arr.length)];
}

function isNumberIsEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export { getRandomInt, isNumberIsEven, getRandomElement };
