// Create two variables, firstName and lastName
let firstName = "John";
let lastName = "Doe";
// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName;
// Log fullName to the console
console.log("conatenate the firstName and lastName," + fullName);


// Create a function that logs out "Hi there, Linda!" when called
let greet = "Hi there";
let name = "Linda!";

function greetName(){
    console.log(greet + " , " + name);
}
greetName()


let myPoints = 3;
//Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints +=3;
    }
    function removePoints(){
        myPoints -=1;
    }
add3Points()
add3Points()
add3Points()
removePoints()
removePoints()


// Call the functions to that the line below logs out 10
console.log(myPoints);

let firstBatch = 5;
let secondBatch = 7;
let count = firstBatch + secondBatch;
console.log(count);


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints +50;
console.log(bonusPoints);

bonusPoints = bonusPoints -75;
console.log(bonusPoints);

bonusPoints = bonusPoints +45;
console.log(bonusPoints);

// Create a function that logs out the sum of all the lap times
let lap1 = 32;
let lap2 = 33;
let lap3 = 35;

function logLapTime(){
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}
logLapTime();


// Create a function that increments the lapsCompleted variable with one
// Run it three times

let lapsCompleted = 0;

function incrementLap(){
    lapsCompleted = lapsCompleted +1;

}
incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted);

