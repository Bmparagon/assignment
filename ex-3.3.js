// 1. Create an array containing three values: 1, 2, and 3. 
// 2. Nest the original array into a new array three times. 
// 3. Output the value 2 from one of the arrays into the console.


let arr = [1, 2, 3]; //1

//2
let nested1 = [arr];
let nested2 = [nested1];
let nested3 = [nested2];

console.log(nested3[0][0][0][1]);