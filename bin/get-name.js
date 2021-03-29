import readlineSync from 'readline-sync';

function nameOfUser() {
  return readlineSync.question('May I have your name? ');
}

export default nameOfUser;
