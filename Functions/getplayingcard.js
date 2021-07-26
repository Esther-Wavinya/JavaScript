/*
Write a getCard() function which returns a random playing card object, like:

{
  value: 'K'
  suit: 'clubs'
}

Pick a random value from:
----1,2,3,4,5,6,7,8,9,10,J,O,K,A

Pick a random suit from:
----clubs, spades, hearts, diamonds

Return both in an object

*/



function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'O', 'K', 'A']
  const idx = Math.floor(Math.random() * values.length);
  return idx;
}

getCard();    //4
getCard();    //11
getCard();    //13
getCard();    //10
getCard();    //7
getCard();    //5
getCard();    //12
getCard();    //2
getCard();    //13
getCard();    //10
getCard();    //9
getCard();    //5
getCard();    //5
getCard();    //11




//values.length
function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'O', 'K', 'A']
  const validx = Math.floor(Math.random() * values.length);
  const value = values[validx];
  const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
  const suitIdx = Math.floor(Math.random() * values.length);
  const suit = suits[suitIdx];
  console.log(value, suit);
}



getCard();       //1 undefined
getCard();        //3 hearts




//suits.length
function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'O', 'K', 'A']
  const validx = Math.floor(Math.random() * values.length);
  const value = values[validx];
  const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = suits[suitIdx];
  console.log(value, suit);
}

getCard();     //K hearts
getCard();     //2 hearts
getCard();       //9 hearts
getCard();     //K hearts
getCard();     //10 hearts
getCard();       //K hearts
getCard();     //5 spades
getCard();     //6 diamonds
getCard();       //8 spades





//
function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'O', 'K', 'A']
  const validx = Math.floor(Math.random() * values.length);
  const value = values[validx];
  const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = suits[suitIdx];
  return { value: value, suit: suit };
}


getCard();     //K hearts
getCard();     //2 hearts
getCard();       //9 hearts
getCard();     //K hearts
getCard();     //10 hearts
getCard();       //K hearts
getCard();     //5 spades
getCard();     //6 diamonds
getCard();       //8 spades



//returning a random element from an array
function pick(arr) {
  //return random element from array
  Math.floor(Math.random() * arr.length);
  return arr[idx];
}


pick(['a', 'b']);     //"b"
pick(['a', 'b']);     //"b"
pick(['a', 'b']);     //"b"
pick(['a', 'b']);     //"b"
pick(['a', 'b']);     //"b"
pick(['a', 'b']);     //"a"
pick([1,2,3,4,5,6,7]);     //4
pick([1,2,3,4,5,6,7]);     //6
pick([1,2,3,4,5,6,7]);     //5
pick([1,2,3,4,5,6,7]);     //2




//reusable code
//returning a random element from an array
function pick(arr) {
  //return random element from array
  Math.floor(Math.random() * arr.length);
  return arr[idx];
}


function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'O', 'K', 'A']
  const value = pick(values);
  const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
  const suitIdx = Math.floor(Math.random() * suits.length);
  const suit = pick(suits);
  return { value: value, suit: suit };
}


getCard();      //{value: "2", suit: "diamonds"}
getCard();      //{value: "6", suit: "diamonds"}
getCard();      //{value: "K", suit: "clubs"}
getCard();      //{value: "2", suit: "diamonds"}
getCard();      //{value: "1", suit: "diamonds"}




//OR
//returning a random element from an array
function pick(arr) {
  //return random element from array
  Math.floor(Math.random() * arr.length);
  return arr[idx];
}



  const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
  return { value: pick[values], suit: pick[suits] };


getCard();      //{value: "2", suit: "diamonds"}
getCard();      //{value: "6", suit: "diamonds"}
getCard();      //{value: "K", suit: "clubs"}
getCard();      //{value: "2", suit: "diamonds"}
getCard();      //{value: "1", suit: "diamonds"}




