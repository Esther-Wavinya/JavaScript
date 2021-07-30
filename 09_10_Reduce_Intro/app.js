//Reduce - Executes a reducer function on each element of the array, resulting in a single value.



//SUMMING AN ARRAY
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// callback         accumulator     currentValue      returnValue
// first call            3            5                    8
// second call           8            7                    15
// third call            15           9                    24
// fourth call           24          11                    35

//35





const nums = [3, 4, 5, 6, 7];
// To multiply all values in nums:
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520