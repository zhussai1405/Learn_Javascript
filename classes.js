class Animal{
    constructuor(type, legs){
        this.type = type;
        this.legs = legs;
    }
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }
}


//ES6
class User{
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}asdfg`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}faraz`
    }
}
 const user =new User("user", "abc@gmail.com", "1234");
 console.log(user.encryptPassword());
 console.log(user.changeUsername());

/*Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.*/

 class Player {
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);

    }
}

const messi = new Player("messi", "Argentina");

messi.introduce();

/*reate a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.*/

class TennisPlayer extends Player {
    constructor(name, country, age){
        super(name, country);
        this.age = age;
}
    playTennis(){
        console.log(`${this.name} is ${this.age} years old and know how to play Tennis`);
    }
}
const roger = new TennisPlayer("Roger Federer", "Spain", 38);
roger.playTennis();

