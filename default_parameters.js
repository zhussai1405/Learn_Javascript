const leadSinger = (artist="someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();


//By default parameters
const dinnerMenu = (food= "something") => {
	console.log (`I am going to eat ${food} in dinner`);
}
console.log(dinnerMenu());


function foodShopping( food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodShopping();