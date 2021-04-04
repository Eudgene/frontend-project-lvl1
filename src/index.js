import getnameOfUser from '../bin/get-name.js';

function welcomAndAnswer(answerF, nameOf) {
  console.log('Welcome to the Brain Games!');
  console.log(`Hi, ${nameOf}!`);
  console.log(answerF);
}

function Engine(answerFirst, functionToRezult) {
  const nameOfUser = getnameOfUser();
  welcomAndAnswer(answerFirst, nameOfUser);

  for (let counter = 0; counter <= 3; counter += 1) {
    if (counter < 3) {
      if (functionToRezult() === false) {
        console.log(`Let's try again, ${nameOfUser}!`);
        break;
      }
    } else if (counter === 3) {
      console.log(`Congratulations, ${nameOfUser}!`);
    }
  }
}

export default Engine;
