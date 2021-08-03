//We do this so often that there's a new shorthand way of adding methods. SHORTHAND

const math = {
  blah: 'Hi!',
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}
math.add(50, 60)   //110



//A lot shorter
const auth = {
  username: 'TommyBot',
  login() {
    console.log("LOGGED YOU IN!")
  },   //Separate our properties by commas. it's a must
  logout() {
    console.log("GOODBYE")
  }
}