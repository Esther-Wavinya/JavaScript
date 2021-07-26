/*

FUNCTIONS
Reusable procedures:
. Functions allow us to write reusable, modular code
. We define a "chunk" of code that we can then execute at a later point
. We use them ALL THE TIME
STEPS - Define then run
DEFINE:  


function statement:
function funcName() {
  //do someething
}


*/


//DEFINE - registering once
function grumpus() {
  console.log('ugh...you again...');
  console.log('for the last time...');
  console.log('LEAVE ME ALONE!!!');
}

//RUN -
/*
funcName();     //run code
funcName();     //run again!
*/

"hello".toUpperCase;      //"HELLO"
grumpus();       /*
ugh...you again...
for the last time...
LEAVE ME ALONE!!!
*/

grumpus();        /*
ugh...you again...
for the last time...
LEAVE ME ALONE!!!
*/


for(let i = 0; i < 50; i++) {
  grumpus();
}           /*

ugh...you again...
for the last time...
LEAVE ME ALONE!!!


ugh...you again...
for the last time...
LEAVE ME ALONE!!!


ugh...you again...
for the last time...
LEAVE ME ALONE!!!

ugh...you again...
for the last time...
LEAVE ME ALONE!!!

and so on
*/








//INTRODUCING ARGUMENTS
function greet() {
  console.log('Hi');
}

greet();      //Hi
greet();      //Hi


/*
We can also write functions that accept inputs, called arguments

greet('Tim');      //"Hi Tim"
greet('Anya);    //"Hi Anya"
*/


avg(20, 25);      //22.5

avg(3, 2, 5, 6);     //4


//built-in arguments & methhods - need no inputs

//No input
"hello".toUpperCase();

//Arguments!
//Different inputs...
"hello".indexOf('h');       //0

//Different outputs...
"hello".indexOf('o')       //4



//greet take 2
function greet(person) {
  console.log(`Hi, ${person}!`);
}


greet('Arya');         //"Hi, Arya!"
greet('Ned');          //"Hi, Ned!"




//
function greet(nickname) {
  console.log(`Hi, ${nickname}!`);
}
greet('tim');       //Hi, tim!





//RollDice function
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for(let i = 0; i < numRolls; i++) {
    rollDie();

  }
  
}


throwDice(3);               /*
Rolled: 4
Rolled: 6
Rolled: 2
*/

throwDice(5);           /*
Rolled: 6
Rolled: 4
Rolled: 6
Rolled: 2

*/













//FUNCTIONS WITH MULTIPLE ARGUMENTS - parameter, argument
function square(num) {
  console.log(num * num);
}

square(4);          //16


//multiple parameters
function sum(x, y) {
  console.log(x + y);
}

function divide(a, b) {
  console.log(a / b);
}

divide(1, 4);       //0.25


divide(4, 1);      //4


divide('s', 4);     //NaN


divide(5);     //NaN  means 5/undefined








//RETURN STATEMENT
/*
Built-in methods return values when we call them.
We can store those values:
*/
const yell = "I will end you".toUpperCase();
yell;             //"I WILL END YOU"

const idx = ['a', 'b', 'c'].indexOf('c');
idx;             //2



//NO RETURN
/*
Our functions print values out, but do not return anything
*/


function add(x, y) {
  console.log(x + y);
}
//if we try to save it in a variable it becomes undefined
const sum = add(10, 16);
sum;       //undefined

add(1, 2);    //3





/*
Using RETURN
Now we can capture a return value in a variable
You can only return one thing from a function.
You can have multiple return statements in a single function.
*/

function add(x, y) {
  return x + y;      //RETURN!
}
const sum = add(10, 16);
sum;          //26

const answer = add(100, 200);
answer;     //300





//RETURN
/*
The return statement ends function execution AND specifies the value to be returned by that function
*/
function square(x) {
  return x * x;
  console.log('ALL DONE!');
}

square(4);       //16


//
function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
  }
  else {
    return false;
  }
}

isPurple('blue');     //false
isPurple('purple');      //true
isPurple('PURPLEE');         //false
isPurple('PURPLE');             //true




//REWRITE PREVIOUS CODE - ELSE IF BY using one return statement
function isPurple(color) {
  return color.toLowerCase() === 'purple';
}

isPurple('purple');         //true
isPurple('purpleasd');         //false
'pink'.toLowerCase() === 'purple';        //false
'PurPLE'.toLowerCase() === 'purple';        //true






function containsPurple(arr) {
  for(let color of arr) {
    if(color === 'purple' || color === 'magenta') {
      return true;
    }
    return false
  }
}

containsPurple(['blue', 'pink', 'magenta']);      //true
containsPurple(['blue', 'pink', 'magentaasd']);        //false





















