


const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

// The old way: 
// Make the object
// const team = {};
// Then add a property using dynamic key:
team[role] = person;
team[role2] = person2;
//{host: "Jools Holland", Director: "James Cameron"} 



// USING COMPUTED PROPERTIES!
//We can use a variable as a key name in an object literal property!
const user = 'Jools';
const userRoles = {
  [user]: 'Admin'
}
userRoles;       //{Jools: "Admin"}



//USING COMPUTED PROPERTIES
const team = {
  [role]: person,
  [role2]: person2,
}
team;    //{host: "Jools Holland", Director: "James Cameron"} 

//
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}
team;    //{16: "sixteen", host: "Jools Holland", Director: "James Cameron"}





//add a property to return a new function based on the obj with a key and value added
//WITHOUT COMPUETED PROPERTY
function addProp(obj, k, v) {
const copy = {
    ...obj
  };
  copy[k] = v;
  return copy;
}
const res = addProp(team, 'happy', ':)')
res;  //{16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}


//COMPUTED PROPERTY WITH ARROW FUNCTION
const addProp = (obj, k, v) => {
   return {
     ...obj,
     [k]: v
   }
 }
 const res = addProp(team, 'happy', ':)') //{16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}



 //COMPUTED PROPERTY WITH IMPLICIT ARROW FUNCTION

const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v
})
const res = addProp(team, 'happy', ':)')  //{16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}
