//exercise 2.3

// Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a2 + b2 = c2.
// The Pythagorean theorem only applies to right-angled triangles. The sides connected to the 90-degree angle are called the adjacent and opposite sides, represented by a and b in the formula. The longest side, not connected to the 90-degree angle, is called the hypotenuse, represented by c.
// You can use prompt() to get the value for a and b. Write code to get the value from the user for a and b. Then square the values of both a and b before adding them together and finding the square root. Print your answer to the console.

let a = prompt('Value for a');
let b = prompt('Value for b');
let aSquare = a**2;
let bSquare = b**2;
let sum = aSquare + bSquare;
let c = Math.sqrt(sum)
prompt(`The Answer is: `+c)