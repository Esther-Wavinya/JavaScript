//The value of THIS depends on the invocation context of the function it is used in. The value of THIS will chnage depending on how the function is actually executed not just where you write it.

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this. reason why we don't use arrow functions as methods in an object.
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`)
  }
}


// INVOCATION CONTEXT MATTERS!!!
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object