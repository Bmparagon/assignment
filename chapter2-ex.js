// //chapter 2 exercise

// Create a variable that contains a value in miles, convert it to kilometers, 
// and log the value in kilometers in the following format:
// The distance of 130 kms is equal to 209.2142 miles 

const givenKilo = 1.60934
let milesInput = prompt("Enter the distance in miles: ");
let miles = milesInput * givenKilo;
miles = parseFloat(milesInput);
    if (isNaN(milesInput)) {
        alert("Enter a number")
    } else {
        miles = milesInput * givenKilo
    }
console.log(`The distance of ${milesInput} miles is equivalent to ${miles} kilometers`); 
alert(`The distance of ${milesInput} miles is equivalent to ${miles} kilometers`);   