//SPREAD syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key value pairs(for object literals) are expected.



//spread for function calls
const nums = [ 9, 3, 2, 8 ];
Math.max(nums);     //NaN
//Use spread!
Math.max(...nums);    //67
//same as calling;
//Math.max(9,3,2,8)    expands an iterable (array, string, etc. into a list of arguments)


//spread in array literals
//Creates a new array using an existing array. Spreads the elements from one array into a new array.
const nums1 = [ 1, 2, 3 ];
const nums2 = [ 4, 5, 6];
[ ...nums1, ...nums2 ];     //[1, 2, 3, 4, 5, 6]

[ 'a', 'b', ...nums2 ];    //["a", "b", 4, 5, 6]

[ ...nums1, ...nums2, 7, 8, 9 ];   //[1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//spread in object literals
//Copies properties from one object into another object literal
const feline = { legs: 4, family: 'felidae' };
const canline = { family: 'Canline', furry: true};

const dog = { ...canline, isPet: true };


const lion = { ...feline, genius: 'Panthera' };






function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}
const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T