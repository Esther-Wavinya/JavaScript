//DEFINE

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}


//RUN
rollDie();           /*

Rolled: 2
rollDie();
Rolled: 3
rollDie();
Rolled: 3
rollDie();
Rolled: 4
rollDie();
Rolled: 5
rollDie();
Rolled: 1

*/




function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

//You can call functions inside other functions, inside loops, inside conditionals
function throwDice() {
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
}

throwDice();          /*
Rolled: 4
Rolled: 6
Rolled: 1
Rolled: 4
Rolled: 2
Rolled: 2
*/



