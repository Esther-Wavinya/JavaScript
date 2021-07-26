//MAKING DECISIONS IN JS - BOOLEAN LOGIC

//COMPARISON OPERATORS
/*
> - greater than
< - less than
>= - greater than or equal to
<= - less than or equal to
== - equality
!= - not equal
=== - strict equality
!== - strict non-equality

 */



//Notice these all return a boolean!
10 > 1;    //true
0.2 > 0.3;   //false
-10 < 0;   //true
50.5 < 5;   //false
0.5 <= 0.5;  //true
99 >= 4;    //true
99 >= 99;   //true
'a' < 'b';   //true
'A' > 'a';   //false

//Though it's uncommon, you can compare strings. Just be careful, things get dicey when dealing with case, special characters and accents!

"hello".length >= "hello!".length    //false
'a' < 'A'   //false
'A' < 'a'   //true
'B' < 'a'  //true

//READ MORE ON UNICODE CHARACTERS
'#' < '$'  //true





//DOUBLE EQUALS (==)
/*
. Checks for equality of value but not equality of type
. It coerces both values to the same type and then compares them
. This can lead to some unexpected results!
 */

4 == 4; //true
'a' == 'a';  //true
'b' == 'c';  //false
7 == '7';  //true
0 == '';   //true
0 == 's';   //false
true == false;   //false
0 == false;   //true
null == undefined;   //true




//TRIPLE EQUALS (===)
/* Checks for equality of value AND type */

5 === 5;  //true
1 === 2;   //false
2 === '2';   //false
false === 0;   //false
undefined === null;   //false
null === null;    //true


//Same applies to !== and !=
10 != '10';    //false
10 !== '10';   //true


let isLoggedIn = false;
isLoggedIn == false;   //true

isLoggedIn = 0;
isLoggedIn == false;   //true
isLoggedIn === false;   //false
//GO WITH TRIPLE EQUALS






//RUNNING CODE FROM A SCRIPT


console.log()    //prints arguments to the console. we need this when working with files
/*
Write your code in a .js file

app.js
//Put your code in this js file
alert(Hello from JS!');

//Won't show up
"hi".toUpperCase();

//Will show up!
console.log("hi".toUpperCase());

*/


/*
Include your script in a .html file

demo.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My first JS Script</title>
  <script src="app.js"></script>
</head>
<body>
  
</body>
</html>

*/





 //CONDITIONALS

//IF  - Allows us to run code if a given condition is true

//Single conditions
let rating = 3;
if(rating === 3) {
  console.log("YOU ARE A SUPERSTAR"); 
}

//print odd number
let num = 37;
if (num % 2 !== 0) {
  console.log('ODD NUMBER!');
}



//ELSE IF - If the first condition is not true, maybe this other is 
/*
Performance review
3 - superstar
2 - meets expectations
1 - needs improvement
anything else - wtf?
 */

let rating = 2;
if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
}


//You can have multiple else ifs

let rating = 1;
if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
  console.log("NEEDS IMPROVEMENT");
}



//ELSE - If nothing was true, do this.. KIND OF OTHERWISE. One else per if but can have several else ifs

//
let rating = 'a';
if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
  console.log("NEEDS IMPROVEMENT");
}
else {
  console.log("INVALID RATING");
}



//
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);   //template literal
  highScore = userScore;
}
else {
  console.log(`Good Game. Your score of ${userScore} did not bet the high score of ${highScore}`);
}





//NESTING CONDITIONALS
/*
NESTING
We can nest conditionals inside conditionals */


//
let password = "cat dog";
if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {     //there is spaces
    console.log("Password cannot include spaces");
  }
  else {
    console.log("Valid password!")
  }
  
}
else {
  console.log("Password too short!");
}



//output on console is - Password is long enough, but cannot contain spaces
let password = 'hello kitty';
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {  //no spaces
    console.log('Valid Password!');
  }
  else {
    console.log('Password is long enough, but cannot contain spaces');
  }
}
else {
  console.log('Password must be longer!');
}





//TRUTHY & FALSY VALUES
/*

. All values have an inherent truthy or falsy boolean value
. Falsy values:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN
. Everything else is TRUTHY

*/


//OUTPUTS TRUTHY
let mystery = 5;
if (mystery) {
  console.log("TRUTHY");
}
else {
  console.log("FALSY");
}


//OUTPUTS FALSY
let mystery = 0;
if (mystery) {
  console.log("TRUTHY");
}
else {
  console.log("FALSY");
}


//OUTPUTS FALSY
let mystery = 0 / 0;
if (mystery) {
  console.log("TRUTHY");
}
else {
  console.log("FALSY");
}


//OUTPUTS FALSY
let mystery = NaN;
if (mystery) {
  console.log("TRUTHY");
}
else {
  console.log("FALSY");
}


//OUTPUTS FALSY
let mystery = "";
if (mystery) {
  console.log("TRUTHY");
}
else {
  console.log("FALSY");
}





//LOGICAL OPERSATORS
/*
&& - AND
|| - OR
! - NOT
 */


//AND (&&) 
/*
Both sides must be true in order for the whole thing to be true. If one is false, the entire thing is false
 */

1 <= 4 && 'a' === 'a';     //true
9 > 10 && 9 >= 9;    //false
'abc'.length === 3 && 1+1 === 4;    //false


//
true && true;     //true
true && false;     //false



//
let password = 'taco tuesday';
if (password.length >= 6 && password.indexOf(' ') === -1) {    //password no spaces
  console.log("Valid Password!");
}
else {
  console.log("INVALID PASSWORD");
}





//To check if a number is within a specified range
//to pick/guess a number between 1 and 10, and to make sure it is between 1 and 10

let num = 3;
if(num >= 1 && num <= 10) {
  console.log('Number is between 1 and 10');
}
else {
  console.log('Please guess a number between 1 and 10');
}   // output is numberis between 1 and 10





//OR (||)
/*
If one side is true, the whole thing is true
 */

//only one side needs to be true!
1 !== 1 || 10 === 10;     //true
10/2 === 5 || null;      //true
0 || undefined;      //false



true || false;     //true
false || false;   //false



//
let age  = 76;
if (age < 6 || age >= 65) {
  console.log('You get in for free!');
}
else {
  console.log('That will be $10 please')
}    //output is you get in for free



//
let age  = 30;
if (age < 6 || age >= 65) {
  console.log('You get in for free!');
}
else {
  console.log('That will be $10 please')
}      //output is that will be $10 please





//chaining OR - to check if color is purple or a shady purple like orchid, violet

let color = "violet";
if (color === 'purple' || color === 'lilac'|| color === 'violet') {
  console.log('GREAT CHOICE');
}





//NOT (!)
/*
! expression returns true if the expression is false. works on a single expression, kind of negates it.
on truthy returns false. on flasy returns true.
 */

!null;     //true
! (0 === 0);   //false
! (3 <= 4);    //false
!0;   //true
!'';   //true
!45;   //false



//check if there is not a logged in user
let loggedInUser;

//if there isn't a logged in user
if (!loggedInUser) {
  console.log('GET OUT OF HERE');
}


//
let flavor = 'grape';

if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log('WE DON\'T HAVE THAT FLAVOR');
}


//OR THIS OPTION
if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('WE ONLY HAVE GRAPE AND CHERRY');
}  //Means  if (!(true));





//OPERATOR PRECEDENCE - BODMAS - NOT AND OR 
//What does this evaluate to?

/*
NOT (!) has higher precedence than && and ||. && has higher precedence than ||. You can alter this using parenthesis (). 
!, &&, ||.
 
*/
let x = 7;
x == 7 || x === 3 && x > 10;   //AND operator takes precedence over OR
/*
so x === 3 && x > 10 takes precedence, which is false. then false || x == 7 which true, gives true
 */



//THE SWITCH STATEMENT
/*
Takes one value and checking it against multiple potential values.  */

//INSTEAD OF
let day = 9;

if (day === 1) {
  console.log('MONDAY');
}
else if (day === 2) {
  console.log('TUESDAY');
}
else if (day === 3) {
  console.log('WEDNESDAY');
}
else if (day === 4) {
  console.log('THURSDAY');
}
else if (day === 5) {
  console.log('FRIDAY');
}
else if (day === 6) {
  console.log('SATURDAY');
}
else if (day === 7) {
  console.log('SUNDAY');
}
else {
  console.log('INVALID DAY');
}



//DO THIS - add a break to avoid several cases from running
let day = 4;
switch (day) {
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('THURSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
    console.log('SATURDAY');
    break;
  case 7:
    console.log('SUNDAY');
    break;
  default:
    console.log('INVALID DAY');
}



//can combine cases espec ially if they have similar values
let emoji = 'happy face';
switch (emoji) {
  case 'happy face':
    console.log('yellow');
    break;
  case 'sad face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
    console.log('red');
    break;
  case 'lips':
    console.log('red');
    break;
  
}


//combining above - yellow and red
let emoji = 'sad face';
switch (emoji) {
  case 'happy face':
  case 'sad face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
  
}   //sometimes no default







//TERNARY OPERATOR
/*
Taking an if and else statemant and combining them into one
condition ? expIfTrue : expIfFalse;

Involves yes or no if and else. no else ifs involved
 */

//instead of this
let num = 7;
if (num === 7) {
  console.log('lucky!');
}
else {
  console.log('BAD!');
}


//DO THIS - condition ? expIfTrue : expIfFalse;

let num = 7;
num === 7 ? console.log('lucky!') : console.log('BAD!');



//
let status = 'offline';
let color;
if (status === 'offline') {
  color = 'red';
}
else {
  color = 'green';
}

//rewrite it as
let status = 'offline';
let color = status === 'offline' ? 'red' : 'grean';





