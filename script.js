
// Goal: Working blackjack Game
// Step 1: display message, cards & sum
// Step 2: new game 
// Step 3: new card 


// elements
let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newCard-el");
let sumEl = document.getElementById("sum-el");

 
// messageEl.textContent = "";
cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
sumEl.textContent = "Sum: " + sum;

function startGame(){
  renderGame()
}

function renderGame(){
  if (sum <= 19){
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Congrats! You got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "Game over!";
    isAlive = false;
  }
  messageEl.textContent = message;
}


function newCard(){
  let card = 5;
  sum += card;
  newCardEl.textContent = "New Card: " + card;
  sumEl.textContent = "Sum: " + sum;
}
