import readlineSync from 'readline-sync';

const answers = ['Yes', 'No'],
var index = readlineSync.keyInSelect(answers, 'Answer "yes" if the number is even, otherwise answer "no". Question: 15');
export {answers, index};
