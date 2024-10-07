//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}
console.log(breakfastMenu());

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}
console.log(lunchMenu());


//Arrow Function
const dinnerMenu =(food) => {
    return `I am going to eat a ${food} for dinner`;

}
console.log(dinnerMenu("chicken salad"));