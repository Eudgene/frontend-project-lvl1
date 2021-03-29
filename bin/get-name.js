import readlineSync from 'readline-sync';

export default function nameOfUser() {
  return readlineSync.question('May I have your name? ');
}

export const name = nameOfUser();
