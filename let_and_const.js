//Difference between let and const
const example = 5;
console.log(example);

// const example_ = [ ];
// example_ = 3;
// console.log(example_);



const example1 = { };
example1.firstName = "abc";
console.log(example1);


//same thing with let
let examp = 5;
examp = 10;
console.log(examp);

let exmp = { };
exmp.firstName = "abc";
console.log(exmp);

let exmple = [];
exmple.firstName = "abc";
console.log(exmple);



// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes