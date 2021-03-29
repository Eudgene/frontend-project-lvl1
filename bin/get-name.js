import readlineSync from 'readline-sync';

export function nameOfUser() {
  return readlineSync.question('May I have your name? ');
}
