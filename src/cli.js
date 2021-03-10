import readlineSync from "readline-sync";

export const userName = () => {
  var name = readlineSync.question("May I have your name? ");
  return name;
};
