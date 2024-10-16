//For of Loop
let incomes = [62000, 67000, 75000];
let total = 0;
for(const income of incomes){
total += income;
}

console.log(total);
//For of Loop
let fullName_ = 'Faraz Hassan';
for(const char of fullName_){

}

console.log(fullName_);

//for of loop iteration
const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]
for (const student of students){
console.log(student.name + "lives in" + student.city);
}


/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world:")

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}