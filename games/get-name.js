import readlineSync from 'readline-sync';

export default function getnameOfUser() {
  return readlineSync.question('May I have your name? ');
}
