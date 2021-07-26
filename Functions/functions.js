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







