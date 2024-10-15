// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("#sum-el") 
let cardsEl = document.getElementById("card-el")

function getRandomCard(){
    return Math.floor(Math.random()* 13)+ 1
}
function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
if(sum <=20 ){
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "you got Blackjack!"
    hasBlackJack = true
} else {
    message = "Yor're out of the game!"
    isAlive = false
}
messageEl.textContent = message
}

function newCard(){
    let card = getRandomCard();
    sum += card
    console.log("cards")
     renderGame()
}

