import getnameOfUser from '..bin/get-name.js';

function Engine(answerFirst, functionToRezult) {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = getnameOfUser();
  console.log(`Hi, ${nameOfUser}!`);
    
  console.log(answerFirst);
    
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
