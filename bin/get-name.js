import readlineSync from 'readline-sync';

function getnameOfUser() {
  return readlineSync.question('May I have your name? ');
}

export default getnameOfUser;