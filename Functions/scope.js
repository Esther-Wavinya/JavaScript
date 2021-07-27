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












//BLOCK SCOPE
let radius = 8;

if(radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;                //PI & circ are scoped to the BLOCK
}

console.log(radius);     //8
console.log(PI);      //NOT DEFINED
console.log(circ);         //NOT DEFINED




//let
if(true) {
  let animal = 'eel';      //this is a block
}
console.log(animal);             //error - animal is not defined










//const
if(true) {
  const animal = 'eel';      
  console.log(animal);          //this is a block
}
console.log(animal);               //error - animal is not defined










//var

if(true) {
  var animal = 'eel';      
  console.log(animal);          
}
console.log(animal);        /*  reason why const and let are used in stead of var for scoping purposes

eel
eel
*/







//
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}                                /*

0 "grizzly bear"
1 "panda bear"
2 "spectacled bear"

*/




//using var
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
var i = 10;
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
} 
console.log(i)                               /*  makes it hard to know where i stops with var

0 "grizzly bear"
1 "panda bear"
2 "spectacled bear"
3

*/







//using let
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
let i = 10;
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
} 
console.log(i)                               /* 

0 "grizzly bear"
1 "panda bear"
2 "spectacled bear"
10

*/






//
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
//let i = 10;
for (const i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
} 
console.log(i)              //error - assignment to const variable






//
//[1,3,5]
//[2,6,10]
function doubleArr(arr) {
  const result = [];                 //const scoped to the entire function
  for(let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}                 
doubleArr([1,2,3]);       //(3) [2, 4, 6]


  




//use console.log
//[1,3,5]
//[2,6,10]
function doubleArr(arr) {
  const result = [];                 //const scoped to the entire function
  for(let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  console.log(double);
  return result;
}                
doubleArr([1,2,3]);       //reference error - double is not defined









//use var
//[1,3,5]
//[2,6,10]
function doubleArr(arr) {
  const result = [];                 //const scoped to the entire function
  for(let num of arr) {
    var double = num * 2;
    result.push(double);
  }
  console.log(double);                 //no access to double in the result due to blocl scope
  return result;
}                
doubleArr([1,2,3]);         //6
//(3) [2, 4, 6]




































