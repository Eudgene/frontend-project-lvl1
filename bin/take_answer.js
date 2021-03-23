import readlineSync from 'readline-sync';

answers = ['Yes', 'No'],
index = readlineSync.keyInSelect(answers, 'Answer "yes" if the number is even, otherwise answer "no". Question: 15');
export {answers, index};
