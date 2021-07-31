//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
//It's an array-like object: Has a length property, Does not have array methods like push/pop
//Contains all the arguments passed to the function
//Not available inside of arrow functions

function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}

// No arguments object inside of arrow functions :(
const multiply = () => {
  console.log(arguments);
}