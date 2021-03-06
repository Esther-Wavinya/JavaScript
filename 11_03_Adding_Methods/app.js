//We can add functions as properties on objects. We call them methods!

// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
}

//To execute addition
math.add(5, 6);   //11

// To execute multiply:
math.multiply(5, 9); //45