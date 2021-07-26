//Intro to objects
/*
Objects allows us to store data where we can associate things in group, pieces of data together but rather than simply ordering data based off the index with 0 as the item of the first as array does. We can specify labels.
Objects are collections of properties
Properties are key-value pair
Rather than accessing data using an index, we use custom keys
property = key + value
 */


const fitBitData = {
  totalSteps : 308727,
  totalMiles : 211.7,
  avgCalorieBurn : 5755,
  workoutsThisWeek : '5 of 7',
  avgGoodSleep : '2:13',
};






//Creating object literals - curly braces{} - when an object in a variable it is a reference to that object. 


const fitBitData = {
  totalSteps : 308727,
  totalMiles : 211.7,
  avgCalorieBurn : 5755,
  workoutsThisWeek : '5 of 7',
  avgGoodSleep : '2:13'
};



//
let comment = {
  username : 'sillyGoose420',
  downVotes : 19,
  upVotes : 214,
  netScore : 195,
  commentText : 'Tastes like chicken lol',
  tags : ['#hilarious', '#funny', '#silly'],
  isGilded : false 
};


//accessing data  in objects
fitBitData.totalMiles;       //211.7
fitBitData.avgCalorieBurn;       //5755


/*
VALID KEYS - All keys are converted to strings 
EXCEPT for symbols, which haven't covered yet
 */

let data = { a : 1 };
data;   //{a : 1}

let stuff = { b : 2,};
stuff;       //{b : 2}


//commas are a must for multiple value pairs
let data = { a: 1, b: 2, c: 3 };
data;     //{a: 1, b: 2, c: 3}







//Accessing object literals
const numbers = {
  100 : 'one hundred',
  16: 'sixteen'
};

//looks like this behind the scenes
const numbers = {
  '100' : 'one hundred',
  '16': 'sixteen'
};


//[] turns it to a string
numbers[100]     //"one hundred"



//
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}


palette.red     //"#eb4d4b"
palette['blue']      //"#30336b"

let color = 'yellow';
palette[color]      //"#f9ca24"

palette["bl"+"ue"]       //"#30336b"






//Adding and updating properties.

const userReviews = {};


//setting it for the first time
userReviews['queenBee49'] = 4.0;
userReviews;           //{queenBee49: 4}
 

//adding
userReviews.mrSmith = 3.5;
userReviews;        //{queenBee49: 4, mrSmith: 3.5}

userReviews.esther;     //undefined


//updating
userReviews['esther'] = 5;
userReviews;          //{queenBee49: 4, mrSmith: 3.5, esther: 5}



//operators
userReviews['queenBee49'] += 2;
userReviews;          ////{queenBee49: 6, mrSmith: 3.5, esther: 5}


userReviews.mrSmith++;     
userReviews;          ////{queenBee49: 6, mrSmith: 4.5, esther: 5}    






//Nested Arrays and Objects
//arrays
const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
]



//objects
const student = {
  firstName: 'David',
  lastName: 'Ukauwa',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88
  }
}


//average for exams
const avg = (student.exams.midterm + student.exams.final) / 2;
avg;        //90

//accessing art
student.strengths[1]           //"Art"






//Objects and Reference Types - objects are reference types just like arrays. use const unless you want to change entire values use let


const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}


const palette2 = palette;
palette2.green = '#ebf876';

palette;       //{red: '#eb4d4b', yellow: '#f9ca24', blue: '#30336b', green: '#ebf876'}
palette2;        //{red: '#eb4d4b', yellow: '#f9ca24', blue: '#30336b', green: '#ebf876'}






//Array /Object equality
let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;



//They look the same but refer to different arrays
nums === mystery;     //false
nums == mystery;     //false


//These two arrays reference the exact same array, so we get true:
nums === moreNums;      //true
nums == moreNums;     //true


moreNums.push(4);
moreNums;       //(4) [1, 2, 3, 4]
nums;     //(4) [1, 2, 3, 4]




//
const user = {
  username: 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notification: []
};



//does not work
if(user.notification === []) {
  console.log('NO NEW NOTIFICATIONS');
}                            //does not work

[] === [];       //false


//what works
if(user.notification.length === 0) {
  console.log('NO NEW NOTIFICATIONS');
}                                             //NO NEW NOTIFICATIONS

//OR                    
if(!user.notification.length) {
  console.log('NO NEW NOTIFICATIONS');
}                                            //NO NEW NOTIFICATIONS    //To check if an array contains or looks like other array that isn't empty 






