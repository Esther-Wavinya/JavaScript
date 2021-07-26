//CREATING ARRAYS
/*
ARRAYS & OBJECTS
Collections of data
 */

/*
ARRAYS
Ordered collections of values. They collect data - primitivetypes
. List of comments on IG post
. Collection of levels in a game
. Songs in a playlist

 */



//To make an empty array
let students = [];

//An array of strings
let color = ['red', 'orange', 'yellow'];

//An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

//A mixed array
let stuff = [true, 68, 'cat', null];





//ARRAY INDICES
//Arrays are indexed

let colors = ['red', 'orange', 'yellow', 'green'];
colors.length  //4
colors[0];   //'red'
colors[1];   //'orange'
colors[2];   //'yellow'
colors[3];   //'green'
colors[4];   //'undefined'
colors[colors.length - 1];  //'green'




//MODIFYING ARRAYS
//Arrays are mutable - can be changed. Arrays get changed.


let colors = ['red', 'orange', 'green', 'yellow'];
colors[0] = 'red';
colors[2] = 'yellow';
colors[3] = 'green';
colors[4];   //undefined
colors[4] = 'blue';  //['red', 'orange', 'yellow', 'green', 'blue']



//
let shoppingList = ['Cheddar Cheese', '2% Milk'];
shoppingList[1] = 'Whole Milk';
shoppingList;    // ['Cheddar Cheese', 'Whole Milk'];


//rewriting . overriding the previous
let shoppingList = ['Cheddar Cheese', '2% Milk'];
shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';
shoppingList;    // ['Cheddar Cheese', 'Whole Milk', 'Ice Cream'];


//adding to the end
let shoppingList = ['Cheddar Cheese', '2% Milk'];
shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList;    // ['Cheddar Cheese', 'Whole Milk', 'Ice Cream', 'Tomatoes'];


//adding to the end
let shoppingList = ['Cheddar Cheese', '2% Milk'];
shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';
shoppingList;    // ['Cheddar Cheese', 'Whole Milk', 'Ice Cream', 'Potatoes'];




//ARRAY METHODS - MDN Documentation - built in methods
/*
Push - add to end
Pop - remove from end
Shift - remove from start
Unshift - add to start
 */


//PUSH & POP
//push - Adds to the end of array and returns new length of the array.

let topSongs = [
  'First Time Ever I saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars'
];

topSongs.push('Fortunate Son');
topSongs;   /* [
  'First Time Ever I saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
  'Fortunate Son'
]; 
*/


topSongs.push('true');
topSongs;    /* [
  'First Time Ever I saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
  'Fortunate Son',
  'true'
]; 
*/


//pop

topSongs;    /* [
  'First Time Ever I saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
  'Fortunate Son',
  'true'
]; 
*/

topSongs.pop()   //true

const nextSong = topSongs.pop();
nextSong;     //'Fortunate Son'
topSongs;     /*
[
  'First Time Ever I saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars'
];
*/



//SHIFT AND UNSHIFT
//unshift - adds at the beginning of an array and creates a new length of array

let dishesToDo = ['big platter']
dishesToDo.unshift('large plate')    //2
dishesToDo.unshift('small plate')    //3
dishesToDo;      //(3) ['big platter', 'large plate', 'small plate']

dishesToDo.unshift('cereal bowl') //4
dishesToDo.unshift('mug')    //5
dishesToDo.unshift('dirty spoon')   //6
dishesToDo;   //(6) ['dirty spoon', 'mug', 'cereal bowl', 'small plate', 'large plate', 'big platter']


//shift - removes the first element from an array and returns that removed element. It changes the length of the array

dishesToDo.shift();    //"dirty spoon"
dishesToDo;    // (5)   ['mug', 'cereal bowl', 'small plate', 'large plate', 'big platter']
dishesToDo.shift();   //"mug"
dishesToDo.shift();    //"cereal bowl"
dishesToDo.shift();   //"small plate"
dishesToDo;    //(2) ['large plate', 'big platter']
dishesToDo.shift();   //"large plate"
dishesToDo.shift();   //"big platter"



//
dishesToDo.unshift('fork', 'knife')    //2
dishesToDo;     //(2) ["fork", "knife"]
dishesToDo.unshift('small spoon')  //3
dishesToDo.unshift('large spoon')   //4
dishesToDo;    //(4) ["large spoon", "small spoon", "fork", "knife"]

dishesToDo.push('platter')  //5
dishesToDo;   //(5) ["large spoon", "small spoon", "fork", "knife", "platter"]
dishesToDo.push('cutting board', 'cookie sheet')    //7
dishesToDo;    //(7) ["large spoon", "small spoon", "fork", "knife", "platter", "cutting board", "cookie sheet"]






//MORE METHODS!
/*
concat - merge arrays
includes - look for a value
index0f - just like str.indexOf
join - creates a string from array
reverse - reverses an array
slice - copy portion of an arr
splice - remove/replace elements
sort - sorts an array
 
*/


//CONCAT - order matters
let fruits = ['apple', 'bananas'];
let veggies =  ['aspiragus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];



console.log(fruits.concat(veggies));   //(4) ["apple", "bananas", "aspiragus", "brussel sprouts"]
console.log(veggies.concat(fruits));   //(4) ["aspiragus", "brussel sprouts", "apple", "bananas"]

let allFood = fruits.concat(veggies, meats);    //(6) ["apple", "bananas", "aspiragus", "brussel sprouts", "steak", "chicken breast"]





//includes 
/*
Determines whether an array includes a certain value among its entries  returning true or false appropriate. 
It's a boolean method.
fromIndex - where to start searching from.
 */

let ingredients = ['water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter'];
ingredients.includes('fish')   //false
ingredients.includes('shrimp')  //true
ingredients.includes('corn')  //false
ingredients.length;    //8

ingredients.includes('water', 3)   //false
ingredients.includes('water')     //true
ingredients.includes('water', 0)   //true



//see if something is there  but not where use includes
if (ingredients.includes('flour')) {
  console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}         // I AM GLUTEN FREE, I CANNOT EAT THAT!






//indexOf
/*
Returns the first index at which a given element can be found in the array or -1 if it is not present.
 */

let ingredients = ['water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter'];

ingredients.indexOf('eel')    //6
ingredients.indexOf('maple syrup')   //-1
ingredients.indexOf('cheese', 5)    //-1
ingredients.indexOf('cheese', 2)   //3

//to know where a value is use indexOf
ingredients.indexOf('flour') !== -1;



//reverse
/*
reverses an array in place. the first array element becomes the last and the last array element becomes the first
 */

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
letters.reverse()   //(7) ["R", "E", "S", "P", "E", "C", "T"]




//JOIN
/*
creates and returns a new string by concatenating all of the elements in an array(or an array0like object) separated by commas or a specified separator string. If the array has only one item, the that item will be returned without using the separator.
*/

letters.join();   //"T,C,E,P,S,E,R"
letters.join('&');    //"T&C&E&P&S&E&R"
letters.reverse().join('.');    //"R.E.S.P.E.C.T"
letters.reverse().join('-');    //"T-C-E-P-S-E-R"
letters.reverse().join('-');    //"R-E-S-P-E-C-T"

[12.3, 60, false].join();     //"12.3,60,false"
[12.3, 60, false].join('  # -> ');      //"12.3 # -> 60 # -> false"





//SLICE
/*
Returns a shallow copy of a portion of an array into a new array object selected from begin to end(end not included) where begin and end represent the index of items in that array. The original array will not be modified
 */

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 2); 
swimmers;    //(2) ["shark", "salmon"]

let swimmers = animals.slice(0, 3); 
swimmers;    //(3) ["shark", "salmon", "whale"]

let mammals = animals.slice(2, 4);  
mammals;     //(2) ["whale", "bear"]

let reptiles = animals.slice(4, 6);
//let reptiles = animals.slice(4);
reptiles;    //(2) ["lizard", "tortoise"]

//can pass a negative number. counts backwards
let quadruped = animals.slice(-3);
quadrupeds;     //(3) ["bear", "lizard", "tortoise"]

//copy of an array using slice
animals.slice();    //(6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']


let copy = animals.slice();
copy;    //(6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

animals;   //(6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']




//SPLICE
/*
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

splice(startIdx,   deleteCount,    itemsToInsert);
 */

animals;  //(6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

//Inserting with splice
//Inserting something after shark
animals.splice(1,0,'octopus');   //[]
animals;   //(7) ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']


//deleting with splice
//at index 3, delete 2 items
animals.splice(3,2);      //(2) ["whale", "bear"]  - deleted items
animals;     //(5)  ['shark', 'octopus', 'salmon', 'lizard', 'tortoise']

//replacing with splice
//at index 3, delete 0 items and replace them with snake and frog
animals.splice(3,0,'snake', 'frog');        //[]
animals;        (7) ['shark', 'octopus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise']







//SORTING (PART 1)
/*
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon connecting the elements into strings  then comparing their sequences of UTF-16 code units values
 */

let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
people.sort();     //(5) ["Angie", "Jolne", "Maggie May", "Mrs. Robinson", "Roxanne"]

people;     //(5) ["Angie", "Jolne", "Maggie May", "Mrs. Robinson", "Roxanne"]

let num = [ 34, 10, 10000, 67, 99];      
num.sort();    //(5) [10, 10000, 34, 67,99]   - converts the numebers into a string then compares their utf-16 code units values





//REFERENCE TYPES - stored as array in memory

//primitive/value type variable 
let fruit = "orange";
let color = fruit;
color;    //orange
fruit;    //orange
fruit = "watermelon";  //"watermelon"
fruit;    //"watermelon"
color;    //"orange"


//reference type variable
let nums = [5,6,7,8];
let otherNums = nums;
nums.push(9)  //5
otherNums;    //(5) [5,6,7,8,9]
nums.pop()   //9
nums.pop()  //8
nums.pop()   //7
nums;   //(2) [5,6]
otherNums;   //(2) [5,6]






//Using CONST with arrays
let x = 34;
x += 5   //39
x;    //39
const city = "Lisbon"
city = "London"   //typeerror. cannot reassign const

/*
VALUES CAN CHANGE WITH ARRAYS - As long as the reference remains the same

We can change the internals of an array, we just can't point to a new array or string out of no where. it has to be one reference in memory

const myEggs = ['brown', 'brown'];
myEggs;          //two brown eggs

*/

const myEggs = ['brown', 'brown'];
myEggs.push('purple');    
myEggs[0] = 'green';



myEggs = ['blue', 'pink'];       //NOT ALLOWED



const foods = ['milk'];
foods.push('chocolate');  //2
foods;    //(2) ["milk", "chocolate"]
foods.unshift('tortillas');  //3
foods;     //(3) ["tortillas", "milk", "chocolate"]
foods.pop()   //"chocolate"
foods.pop()    //"milk"
foods.pop()   //"tortillas"
foods;    //[]
foods = []   //Type error - cannot make another array even though it's empty







//WORKING WITH NESTED ARRAYS
/*
We can store arrays inside other arrays

*/
const colors = [
  ['red', 'crimson'],
  ['orange', 'dark orange'],
  ['yellow', 'golden rod'],
  ['green', 'olive'],
  ['blue', 'navy blue'],
  ['purple', 'orchid']
];




const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
];

animalPairs;   //(3) [Array(2), Array(2), Array(2)]   ['doe', 'buck'], ['ewe', 'ram'], ['peahen', 'peacock']
animalPairs[2];     //(2)  ["peahen", "peacock"]
animalPairs[2][0];    //"peahen"
animalPairs[2][1];   //"peacock"
animalPairs[1][1];    //"ram"
animalPairs[0][1] = 'stag';  //"stag"
animalPairs;     ////(3) [Array(2), Array(2), Array(2)]   ['doe', 'stag'], ['ewe', 'ram'], ['peahen', 'peacock']




//tic tac toe - 2 dimensional array
const board = [
  ['0', null, 'X'],
  [null, 'X', '0'],
  ['X', '0', null]
];  







