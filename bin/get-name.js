import readlineSync from 'readline-sync';

function name() {
  return readlineSync.question('May I have your name? ');
}

export default name;
