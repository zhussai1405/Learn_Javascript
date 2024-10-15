//Destructuring Objects
const player = {
    name : 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};
//console.log(player.address.city);
const {name, club, address:{city}} = player;
console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);

//Destructuring the object 
const student = {
    name2: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name2, age, projects: { diceGame } } = student;

console.log(name2);
console.log(age);

console.log(diceGame);


//Destructuring Objects
const player_ ={
	name_ : 'Faraz Hassan',
	age_: 39,
	address_: {
		city_: 'Rawalpindi, Punjab'
		}
	};
	
const {name_, age_, address_: {city_} } = player_;

console.log(`My name is ${name_}, I am ${age_} years old, I lives lives in ${city_}`);


