//spread in object literals
//Copies properties from one object into another object literal
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true};

const dog = { ...canine, isPet: true };   //{family: "Caninae", furry: true, isPet: true }


const lion = { ...feline, genius: 'Panthera' };    //{legs: 4, family: "Felidae", genius: "Panthera" }

const catDog = { ...feline, ...canine };    //{legs: 4, family: "Caninae", furry: true }



const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}


//properties with the same key - legs: 4
const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}



//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}



//copy
const catDogClone = {
  ...catDog
}        
//{family: "Felidae", furry: true, legs: 4}



//spread array in an object literal
const random = [...'hello', {
  ...catDog
}]
/*
0: "h"
1: "e"
2: "l"
3: "l"
4: "o"
5: 
   family: "Felidae"
   furry: true
   legs: 4
*/