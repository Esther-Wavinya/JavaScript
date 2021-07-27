//SCOPE
/*
Understand scope
Write higher order functions
Pass functions as callbacks


Scope - Variable visibility - The location where a variable is defined dictates where we have access to that variable
*/










//FUNCTION SCOPE
function helpMe() {
  let msg = "I'm on fire!";
  msg;       //"I'm on fire";                            msg is scoped to the helpMe function
}
msg;   //not defined





//
function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
}
lol();
console.log(person);       //error - person is not defined. person is scoped to lol() function. have access to it in the function scope but not outside.
console.log(age);          //error - age is not defined. age is scoped to lol() function. have access to it in the function scope but not outside.
console.log(color);            //error - color is not defined. color is scoped to lol() function. have access to it in the function scope but not outside.





//
function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age);
}
function changeColor() {
  let color = 'purple';
  const age = 19;
  console.log(age);
}
lol();
changeColor();              /*     we can call the function changColor outside but we can't manipulate those variables from down here. not in the same scope

45
19

*/








let bird = 'mandarin duck';

function birdWatch() {
  let bird = 'golden pheasant';
  console.log(bird);               //bird is scoped to birdWatch function
}                            //works because of difference in scope. 
birdWatch();
console.log(bird);              /*

golden pheasant
mandarin duck

*/



//
let bird = 'mandarin duck';          //larger scope

function birdWatch() {
  let bird = 'golden pheasant';
  bird;                    //'golden pheasant'       //bird is scoped to birdWatch function
}                            //works because of difference in scope. 
bird;                  //'mandarin duck'












//





