//JS Loops - repeating code

/*
Doing things repeatedly
. Loops allow us to repeat code - "Print 'hello' 10 times", sum all numbers in an array
. There are multiple types: for loop, while loop, for...of loop, for...in loop
 */


//FOR LOOPS
/*
for (
  [initialExpression];   - variable used for the loop mostly i,j,k
  [condition];    -   that checks if the loop should continue running. should run if it's true
  [incrementExpression]  -   whatever operation you are performing on i,j,k
)

 for(){

 }

1. Define a variable - starting point
2. Define a stopping point
3. What happens to this variable each time through
*/



//10 total times
//50 initial value
//60 when to run the loop
//+1 how to change value each time


//start at 1, stop at 10, add 1 each time
for(let i = 1; i <= 10; i++) {
  console.log('HELLO:', i);
}

/*
HELLO: 1
HELLO: 2
HELLO: 3
HELLO: 4
HELLO: 5
HELLO: 6
HELLO: 7
HELLO: 8
HELLO: 9
HELLO: 10
*/


for(let i = 1; i <= 10; i+=3) {
  console.log('HELLO:', i);
}

/*
HELLO: 1
HELLO: 4
HELLO: 7
HELLO: 10
 */





//Generate first 20 perfect squares
/*
1
4
9
16
25
36
49
56
all the way to 400
 */

for(let num = 1; num <= 20; num++) {
  console.log(`${num}*${num} = ${num * num}`);
}                                              /*
1*1 = 1
2*2 = 4
3*3 = 9
4*4 = 16
5*5 = 25
6*6 = 36
7*7 = 49
8*8 = 64
9*9 = 81
10*10 = 100
11*11 = 121
12*12 = 144
13*13 = 169
14*14 = 196
15*15 = 225
16*16 = 256
17*17 = 289
18*18 = 324
19*19 = 361
20*20 = 400

*/




//
for(let i = 50; i >= 0; i -= 10) {
  console.log(i);
}                                                         /*
start i at 50
subtract 10 each iteration
keep going as long as i >= 0

50
40
30
20
10
0
*/






//
for(let i = 200; i >= 0; i -= 25) {
  console.log(i);
}                           /*
200
175
150
125
100
75
50
25
0
 */







//INFINITE LOOPS
//DO NOT RUN THIS CODE!
for(let i = 20; i >= 0; i++) {
  console.log(i);
}      //BADDDDD!!!!    runs on and on. i will always be greater than or equal to 1








//FOR LOOPS AND ARRAYS
/*
To loop over an array, start at 0 and continue to the last index (length-1) 
*/

const animals = [ 'lions', 'tigers', 'bears' ];
for(let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}                       
 /*
0 'lions'
1 'tigers'
2 'bears'

*/




//
const examScores = [ 98, 77, 84, 91, 57, 66 ];
for(let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}              /*
o 98
1 77
2 84
3 91
4 57
5 66

*/







//
const examScores = [ 98, 77, 84, 91, 57, 66 ];
for(let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}   

const myStudents = [
  {
    firstName : 'Zeus',
    grade : 86
  },
  {
    firstName : 'Artemis',
    grade : 96
  },
  {
    firstName : 'Hera',
    grade : 72
  },
  {
    firstName : 'Apollo',
    grade : 90
  }

];

for(let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(student);
  //console.log(`${myStudents[i]}`)
}               /*
o 98
1 77
2 84
3 91
4 57
5 66

{firstNane: "Zeus", grade: 86}
{firstNane: "Artemis", grade: 96}
{firstNane: "Hera", grade: 72}
{firstNane: "Apollo", grade: 90}

*/






//
const examScores = [ 98, 77, 84, 91, 57, 66 ];
for(let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}   

const myStudents = [
  {
    firstName : 'Zeus',
    grade : 86
  },
  {
    firstName : 'Artemis',
    grade : 96
  },
  {
    firstName : 'Hera',
    grade : 72
  },
  {
    firstName : 'Apollo',
    grade : 90
  }

];

for(let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored ${student.grade}`);
}                   /*
o 98
1 77
2 84
3 91
4 57
5 66

Zeus scored 86
Artemis scored 96
Hera scored 72
Apollo scored 90

*/




//Averaging the grades - looping
const myStudents = [
  {
    firstName : 'Zeus',
    grade : 86
  },
  {
    firstName : 'Artemis',
    grade : 96
  },
  {
    firstName : 'Hera',
    grade : 72
  },
  {
    firstName : 'Apollo',
    grade : 90
  }

];

/*for(let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored ${student.grade}`); } */
let total = 0;
for(let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}
//console.log(total);             //345 - total
console.log(total / myStudents.length);                  //86.25 - average







//looping over a string
const word = 'stressed';
let reverseWord = ""
for(let i = word.length -1; i >= 0; i--) {
  reverseWord += word[i];
  console.log(reverseWord);
}               /*
d
de
des
dess
desse
desser
dessert
desserts

*/





//NESTED FOR LOOPS
let str = 'LOL';
for(let i = 0; i <= 4; i++) {
  console.log(" Outer:", i);
  for(let j = 0; j < str.length; j++) {
    console.log('Inner:', str[j]);
  }
}                        /*
 Outer: 0
Inner: L
Inner: O
Inner: L
 Outer: 1
Inner: L
Inner: O
Inner: L
 Outer: 2
Inner: L
Inner: O
Inner: L
 Outer: 3
Inner: L
Inner: O
Inner: L
 Outer: 4
Inner: L
Inner: O
Inner: L
*/





// The inner loop finishes its cycle before the outer loop iterates again
for(let i = 1; i <= 10; i++) {
  console.log(' OUTER LOOP:', i);
  for(let j = 10; j >= 0; j-=2) {
    console.log('INNER LOOP:', j);
  }
}            /*
  
  OUTER LOOP: 1
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 2
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 3
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 4
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 5
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 6
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 7
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 8
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 9
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0
  OUTER LOOP: 10
INNER LOOP: 10
INNER LOOP: 8
INNER LOOP: 6
INNER LOOP: 4
INNER LOOP: 2
INNER LOOP: 0

*/





//2048 tile - game - to sum all the values, you need to loop twice. first loop is gonna iterate the outer array. 
const gameBoard = [
[ 4, 32, 8, 4 ],
[ 64, 8, 32, 2 ],
[ 8, 32, 16, 4 ],
[ 2, 8, 4, 2 ]
];

for(let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i]);
}              /*
(4) [4, 32, 8, 4]
(4) [64, 8, 32, 2]
(4) [8, 32, 16, 4]
(4) [2, 8, 4, 2]

*/



// loop through the arrays
const gameBoard = [
  [ 4, 32, 8, 4 ],
  [ 64, 8, 32, 2 ],
  [ 8, 32, 16, 4 ],
  [ 2, 8, 4, 2 ]
  ];


for(let i = 0; i < gameBoard.length; i++) {
  //make a new variable to loop through first array
  let row = gameBoard[i];
  console.log(row);
  //loop over row
  for(let j = 0; j <row.length; j++) {
    console.log(row[j]);
  }
}              /* outer loop starts , we get row then we loop over j

(4) [4, 32, 8, 4]
4
32
8
4
(4) [64, 8, 32, 2]
64
8
32
2
(4) [8, 32, 16, 4]
8
32
16
4
(4) [2, 8, 4, 2]
2
8
4
2

*/




//Sum it up and you need a total variable
const gameBoard = [
  [ 4, 32, 8, 4 ],
  [ 64, 8, 32, 2 ],
  [ 8, 32, 16, 4 ],
  [ 2, 8, 4, 2 ]
  ];

  
let totalScore = 0;
for(let i = 0; i < gameBoard.length; i++) {
  //make a new variable to loop through first array
  let row = gameBoard[i];
  console.log(row);
  //loop over row
  for(let j = 0; j <row.length; j++) {
    totalScore += row[j];
  }
}                   //totalScore - 230












//WHILE LOOPS
let j = 0;
while(j <= 5) {
  console.log(j);
  j++;
}                      /*
0
1
2
3
4
5
 */


for(let i = 0; i <= 5; i++) {
  console.log(i);
}                        /*
0
1
2
3
4
5
 */





//random numbers - guessing game
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

target;    //2
guess;    //8


//implement loop
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(guess !== target) {
  console.log(guess);
  //guess again
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);

/*
8
7
Target: 1
Guess: 1
*/






//while(some condition).  in the loop, update or attempt to make that condition false. 

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(guess !== target) {           //attempt to make the condition false
  console.log(`Target: ${target} Guess: ${guess}`);
  //guess again
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

/*
Target: 6
Guess: 8
Target: 6
Guess: 9
Target: 6
Guess: 6
CONGRATS YOU WIN!!
*/









//BREAK KEYWORD
//You can use in a for loop - not common
for(let i = 0; i < 10; i++);
if(i === 5) {
  break;
}                          /*
0
1
2
3
4
5

*/



//common in a while loop - redoing the guessing game
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(true) {       //NOT INTUITIVE TO USE while true
  if(target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  //guess again
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
/*
Target: 9
Guess: 7
Target: 9
Guess: 1
Target: 9
Guess: 9
CONGRATS YOU WIN!!

*/








//FOR...OF
/*
A nice and easy way of iterating over arrays (or other iterable objects)
Not supported in internet explorer

SYNTAX:
for (variable of iterable) {
  statement
}
*/

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];


//for loop
for(let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
} /*
soccer
popheads
cringe
books
 */



//for...of loop
for(let sub of subreddits) {      //variable sub of subreddits/iterable/string/array
  console.log(sub);
}   /*
soccer
popheads
cringe
books
 */




//
for(let char of 'cockadoodledoo') {          //character/char of a string/iterable
  console.log(char.toLowerCase());
}
/*
C
O
C
K
A
D
O
O
D
L
E
D
O
O
 */





//COMPARING FOR AND  FOR...OF

//for loop
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for(let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}           /*
2
7
6
9
5
1
4
3
8
 */




//for loop - accessing each row
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for(let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}                 /*
2,7,6 summed to 15
9,5,1 summed to 15
4,3,8 summed to 15
*/



//for...of loop is much cleaner

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for(let row of magicSquare) {
  let sum = 0;
  for(let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}         /*
2,7,6 summed to 15
9,5,1 summed to 15
4,3,8 summed to 15
*/






//matching words1 and words2. accessing corresponding words from words 2
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

//for loop is the best
for(let i = 0; i <words1.length; i++) {
  console.log(words1[i], words2[i]);
}       /*
mail box
milk shake
bath tub
black berry

*/



//for loop is the best - one word
for(let i = 0; i <words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`);
}       /*
mailbox
milkshake
bathtub
blackberry

*/







//FOR...OF WITH OBJECTS.  objects have keys that access values
const movieReviews = {    //objects is not iterable
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

//use for...of to iterate over object keys and values
for(let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}          /*
Arrival 9.5
  Alien 9
  Amelie 8
  In Bruges 9
  Amadeus 10
  Kill Bill 8
  Little Miss Sunshine 8.5
  Coraline 7.5
*/


//average review scores/ratings - values
const rating = Object.values(movieReviews);
let total = 0;
for(let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log(avg);           //8.6875










//FOR...IN LOOPS

/*
OBJECTS
We can loop over the keys of an object, using Object.keys()
 */
const movieReviews = {
  Amadeus: 10,
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8
};
for(let movie of Object.keys(movieReviews)) {
  let score = movieReviews[movie];
  console.log(`I rated ${movie} ${score}/10`);
}          /*

I rated Amadeus 10/10
I rated Arrival 9.5/10
I rated Alien 9/10
I rated Amelie 8/10
 */



/*

FOR...IN
Loop over the keys in an object
SYNTAX:
for(variable in object) {
  statement
} 

*/

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfDecades: 100000
};

for(let prop in jeopardyWinnings) {
  console.log(prop);
}           /*
regularPlay
watsonChallenge
tournamentOfChampions
battleOfDecades
*/



//print with values
const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfDecades: 100000
};

for(let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}                      /*
regularPlay 2522700
watsonChallenge 300000
tournamentOfChampions 500000
battleOfDecades 100000
*/







//to find the total

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfDecades: 100000
};

let total = 0;
for(let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop];
}  
console.log(`Ken Jennings Total Earnings: ${total}`);          /*

Ken Jennings Total Earnings: 3422700

*/
  




//Arrays are objects. can use for...in... in arrays. they are numbers and not keys. Don't use with arrays

for(let k in [88, 99, 77, 66]) {
  console.log(k);
}       /*
0
1
2
3
*/

