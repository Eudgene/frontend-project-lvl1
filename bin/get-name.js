import readlineSync from 'readline-sync';

export function getnameOfUser() {
  return readlineSync.question('May I have your name? ');
}
