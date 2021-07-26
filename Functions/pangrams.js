/*

A pangram is a sentence that contains every letter of the alphabet, like:
"The quick brown fox jumps over the lazy dog"

Write a function callsed isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!

isPangram('The five boxing wizards jump quickly')   //true
isPangram('The five boxing wizards jump quick')      //false

*/


function isPangram(sentence) {
  //loop over a string
  for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    console.log(char);
  }
}                    /*
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
 */






function isPangram(sentence) {
  //loop over a string
  for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(sentence.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}   

isPangram('the five boxing wizards jump quickly');        //true
isPangram('the five boxing wizards jump quickl');      //false
isPangram('the five boxing wizards jump quickly');     //false




//changing cases
function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  //loop over a string
  for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(sentence.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}  




//using includes
function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  //loop over a string
  for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}  

isPangram('the five boxing wizards jump quickly');        //true
isPangram('the five boxing wizards jump quickl');        //false
isPangram('the five boxing wizards jump quckly');        //true
isPangram('the five boxing wizards jump quicasdkly');        //true








