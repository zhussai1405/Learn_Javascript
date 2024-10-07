//Spread Operator
let contacts = ['Mary', 'Joel', 'Danny'];

let personalFriends = ['David', ...contacts, 'Lily'];

console.log(personalFriends);

contacts.push("John");

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

//Using spread operator
const shoppingList = ['eggs', 'milk', 'butter'];

const shoppingBasket = [...shoppingList, 'bread', 'pasta'];

console.log(shoppingBasket);