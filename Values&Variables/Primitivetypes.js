/* Number
String
Boolean
null
undefined 

Technically there are other two: Symbol and BigInt  */

// Introducing Numbers

/* JavaScript has ONE Number type
Positive numbers!
Negative numbers!
Whole number(integers)!
Decimal numbers! */

/* We have all the basic math operations you would expect */
// Creates a comment, which JS will ignore


//Addition
50 + 5 //55

//Subtraction
90 - 1 //89

//Multiplication
11111 * 7 //77777

//Division
400 / 25 //16

//Modulo!! Reminder operator (parseint sign) to determine if number is even or odd
27 % 2 //1

//Exponentials
2 ** 3 //8
5 ** 2 //25

//BODMAS order of operations works in JavaScript

/* NaN
NOT A NUMBER
NaN is a numeric value that represents something that is .... not a number 
*/

0/0 //NaN
1 + NaN //NaN


1/0 //Infinity
-1/0 //-Infinity
0
-0


1.5 + 1.5 * 2 //4.5
(10 % 6) ** 2 //16
200 + 0/0 //NaN


//VARIABLES
/*
Variables are like 'labeled jars' for a value in JavaScript
We can store a value and give it a name, so that we cann...
- Recall it
- Use it
- Or change it later on  
*/

// BASIC SYNTAX
let someName = value;
let age = 72;
age //72

//Recall values
let hens = 4;
let roasters = 2;
hens + roasters //6

//Update values
let hens = 4;

//A raccoon killed a hen
hens - 1;  //3    This does not change the value stored in hens

hens;  //still 4!

//To actually change hens:
hens = hens - 1;       //This actually changes the value stored in hens
hens //3


let score = 0;
score = score +  10; //10
score //10
score += 1; //11
score //11
score += 10; //21
score //21
score -= 100; //-79
score //-790
score = 150; // 150
let bonusMult = 3;
score *= bonusMult;  //450
score //450




//Unary operators
/*Operations that have one side*/
let counter = 0;
counter++;
counter //1
counter++;
counter //2
counter++; 
counter //3
counter--; 
counter //2



//CONST
/*Const works like let except you CANNOT change the value */
const hens = 4;
hens = 20;  //ERROR

const age = 17;                                    //NOT ALLOWED
age = age + 1;   //ERROR


//WHY USE CONST
const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;   // Once we cover Arrays & Objects we'll see other situatuions where const makes sense over let


//VAR
var tripDistance = 7.4;

/*Before let and const, var was the only way of declaring variables. These days there isn't really a reason to use it */
var eggs = 12;
eggs //12
eggs++;
eggs //13




//What is the value of eggCount?
let eggCount = 42;
eggCount + 2; //42



//What is the value of rating after this code runs?
const rating = 7.5;
rating = 8; //7.6


//What is the value of wind_speed & what is the minor issue with this code
let wind_speed = 76;
wind_speed +=5; //81
wind_speed--;  // 80  //Stylistic issue doesn't follow JavaScript programming conventions, variables are supposed to be camelcased not snake cased.




//BOOLEANS
/* Booleans are simple True or False values. Yes or No. 1 or 0 */
isLoggedIn = true;
gameOver = false;
const isWaterWet = true; // We can store booleans in variables

let isHungry = true;
isHungry;  // true


//VARIABLES CAN CHANGE TYPE
/* You probably wouldn't change a number to a boolean but you can! */
let numDonuts = 12; //it's a number
numDonuts = false; //now it's a boolean
numDonuts = 129873872; //back to a number


let isAngry = false;
isAngry = 1239;  // changed boolean to a number. why people don't like in JS and use TYPESCRIPT WITH STRICTER RULES.



//STRINGS
/* In JavaScript, Strings are pieces of text, or strings of characters.  We wrap them in quotes. Single or double quotes. Whether you use single or double quotes, just make sure you are consistent */

let firstName = "Ziggy"; //Double quotes work
let msg = "Please do not feed the chimps!";
let animal = 'Dumb Octopus'; // So do single quotes
let bad = "this is wrong'; // THIS DOES NOT WORK

let firstName = "Ziggy";
firstName  //"Ziggy"
let lastName = "Canaryface";
firstName + lastName  //"ZiggyCanaryface"
firstName + " " + lastName
"Ziggy Canaryface"
let fullName = firstName + " " + lastName
fullName // "Ziggy Canaryface"


//MIXING TYPES
"hi" + 1  // "hi1" 1 is truned into a string
"hi" - "h" //NaN - thinks we are running a mathematical operation



//STRING INDICES
/* Strings are indexed. Each caharacter has a corresponding index(a positional number) LEFT TO RIGHT STARTING FROM ZERO INCREMENTING.    CHICKEN - 0123456   Every string has a property called LENGTH. Every single character in a string matters */

"hello".length //5
"lolololololol".length  //13
"".length  //0
" .   ".length  //10    // added automatically by chrome


let mySong = "Surfin USA"
mySong.length  //11
mySong[0]  //"S"
mySong[1]  //"u"
mySong[2]  //"r"
mySong[3]  //"f"
mySong.length  //11
mySong[11]  //undefined
mySong  //"Surfin USA"
mySong[10]  //A



let gibberish = 'asjhd12763ahsjdas897!* askjhd . (' //undefined
gibberish[gibberish.length - 1]  //"("

/* Strings are immutable in JavaScript meaning individual values is not changeable */
mySong  //"Surfin USA"
mySong[0] = "D"  //"D"
mySong  //"Surfin USA"


//STRING METHODS
/* Strings come with a set of built-in methods which are actions that can be performed on or with that particular string.  

We can do things like...
. Searching within a string
. Replacing parts of a string
. Changing case (upper/lowercase 
  
  Follow this format  
  thing.method() 
  
  In MDN there are so many string methods*/

let msg = "you are so grounded mr"
msg.toUpperCase();  //"YOU ARE SO GROUNDED MR"

msg;  //"you are so grounded mr"

msg = msg.toUpperCase();
msg;  // "YOU ARE SO GROUNDED MR"

msg.toLowerCase(); //"you are so grounded mr"


//CHANGING CASE
let msg = 'I am king';
let yellMsg = msg.toUpperCase();  //'I AM KING'

let angry = 'LeAvE mE aLoNe!';
angry.toLowerCase();  // 'leave me alone!'


//the value in angry is unchanged
angry;     // 'LeAvE mE aLoNe!'

//TRIM - removes white spaces at the beginning and at the end
let greeting = '  leave me alone plz  ';
greeting.trim();  // 'leave me alone plz'
greeting.trim().toUpperCase();   //'LEAVE ME ALONE PLZ'



//MORE STRING METHODS
/* thing.method(arg)

Some methods accept arguments that modify their behaviour. We pass these arguments inside of the parenthesis */

//indexOf - tells where a string in a given string occurs
let tvShow = 'catdog';

tvShow.indexOf('cat');    //0   -  cat starts at index 0
tvShow.indexOf('dog');   //3 -  dog starts at index 3
tvShow.indexOf('z');     //-1 (not found)


"baseball".indexOf("ball");  //4 - ball starts at index 4
"baseball".indexOf("b");  //0 -  Only tells the first occurrence of b which is 0
"Baseball".indexOf("b");  //4 -   It's case sensitive therefore much 4




//slice
/*Takes slices of a given string and gives a slice of it. Can pass two numbers/indices - first one is where we should start the slice and second where it should end. */

"Baseball".slice(4);   //"ball"

let sport = "Baseball"
sport.slice(4);   // "ball"
sport;  //"Baseball"    sport is unchanged-immutable



let str = 'supercalifragilisticexpialidocious'

str.slice(0,5);    //'super'  - index 5 is not inclusive
str.slice(5);     //'califragilisticexpialidocious'

"superhero".slice(0,5);    //"super"
"superhero".slice(5,7);    //"he"

'$50.60'.slice(1)   //"50.60"  To remove dollar sign - index 1 to the end


//replace
'baseball is entertaining'.replace('entertaining', 'ok');     //"baseball is okay"
'ha ha ha'.replace('ha', 'hee');   //"hee ha ha"   only replaces the first one

//to replace individual characters use regular expressions.

let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha')  //'haha so funny! teehee!'  It only replaces the first instance


//What is the value of age? 
const age = "5" + "4";   // "54"  CONCATENATING TWO STRINGS USING PLUS SIGN


//What does this evaluate to?
"pecan pie"[7]   //"i"




//What does this evaluate to?
"PUP"[4];   //undefined




//What is the value of song?
let song = "london calling";
song.toUpperCase();  //"LONDON CALLING" 
song;    //"london calling"




//What is the value of cleanedInput?
let userInput = "  TODD@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();  
cleanedInput;    //"todd@gmail.com"
userInput;      //"TODD@gmail.com"



//What is the value of index?
let park = 'Yellowstone';
const index = park.indexOf('Stone');
index;   // -1   doesn't find the value



//What is the value of index?
let yell = 'GO AWAY!!';
let index = yell.indexOf('!');
index;  //7



//What does this evaluate to?
'GARBAGE!'.slice(2).replace("B",'');   //RAGE!




//STRING ESCAPE CHARACTERS
/* 
\n - newline
\' - single quote
\" - double quote
\\ - backslash 
\t - tab

 */

"he said 'lalala'";   //"he said 'lalala'"
'he said I ain\'t happy';   //'he said I ain't happy'
"he said \"I ain't happy\"";   // "he said "I ain't happy""

"HELLO\nGOODBYE"  
 /* 
"HELLO
GOODBYE" */




//STRING TEMPLATE LITERALS
/* Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
We use back tick characters, no single quotes.  `I am a template literal`
The back-tick key is usually above the tab key. ${} is used to interpolate
*/


`I counted ${3 + 4} sheep`;    // "I counted 7 sheep"
`He said "lol"`;   // "He said "lol""

//The main reason for template literals is that we can embedd information
let username = 'Ziggy31';
`Welcome back, ${username}`  // "Welcome back, Ziggy31"

`GAME OVER ${username.toUpperCase()}`   // "GAME OVER ZIGGY31"

`You owe me ${100 + 218937}`   //"You owe me 219037"



//
let animal = "pig";
let sound = "oink";
`${animal} says ${sound}!`  //"pig says oink!"

`${animal} says ${sound.toUpperCase()}!`   //"pig says OINK!"




//
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;

`You bought ${quantity} ${item}, total price: $${price*quantity}`;   //"You bought 4 cucumbers , total price: $7.96"


//
const minAge = 21;
let yourAge = 19;
`You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years`  //"You must be 21 or older to enter. Come back in 2 years"




//Null & undefined
/*
Null - Intentional absence of any value. Must be assigned. when you want a value to be empty
Undefined - Variables that do not have an assigned value are undefined
 */



//NULL
// No one is logged in yet...
let loggedInUser = null;  // value is explicitly nothing

// A user logs in...
loggedInUser = 'Alan Rickman';


//UNDEFINED - is a value we get back from javascript
"lol"[4]    //undefined
let color;
color;    //undefined - we never declared color




//MATH OBJECT - MDN
/* 
Contains properties and methods for mathematical constants and functions. */


Math.PI  // 3.14159


//Rounding a number:
Math.round(4.9)   //5

//Absolute value
Math.abs(-456)    //456

//Raises 2 to the 5th power
Math.pow(2,5)    //32

//Removes decimal
Math.floor(3.9999)   //3



//RANDOM NUMBERS - MDN
/*
Math.random() gives us a random deciaml between 0 and 1 (non-inclusive)
Returns a random deciaml between 0 and 1 but not including 1
*/

Math.random();
//0.1450243
Math.random();
//0.89374250
Math.random();
//0.97599521


//RANDOM INTEGERS
/*
Let's generate random numbers between 1 and 10
 */

const step1 = Math.random();
//0.5961104892
const step2 = step1 * 10
//5.961104892810
const step3 = Math.floor(step2);
//5
const step4 = step3 + 1;
//6
Math.floor(Math.random() * 10) + 1;  //math.floor chops the decimal point



//TYPE OF PERATOR - To determine the type of a given value. is an operator

typeof 'hello';     //'string'
typeof 2;     //'number'
typeof true;   //'boolean'

//
const mystery = '99 balloons'
typeof mystery;   //"string"
mystery;    //"99 balloons"
typeof undefined;   //"undefined"
typeof null;    //"object"





//PARSEINT & PARSEFLOAT
/*
Used to parse strings into numbers, but watch out for NaN. 
Used in forms mostly, parsing strings
 */

//
parseInt('24')     //24
parseInt('24.987')    //24
parseInt('28dayslater')   //28


parseFloat('24.987')   //24.987
parseFloat('7')     //7
parseFloat('i ate 3 shramp')   //NaN


//
parseInt('21') + 1;       //22
parseFloat('33.5');      //33.5
parseInt('$99');     //NaN
parseInt('99cents')    //99


































