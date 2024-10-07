// Black Jack Game //

// Call the documents from html and cretaing variables and objects //
let messageEl = document.getElementById("message-el");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card");
let theSumEl = document.querySelector("#theSum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
let cards = [];
let HasBlackJack = false;
let inTheGame = false;
let theMessage = "";
let theSum = 0;
let player =  {     //  To add the player name and points when they win or loose //
    name: "Daniel",
    points: 150
}

// render the object's properties back to the html //
playerEl.textContent = player.name + ":" + "$" + player.points;

// creating a function for the cards to give random numbers
function getRandomCard() {
    
    let randomNumber = Math.floor(Math.random() * 14);

    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }

    else {
        return randomNumber;
    }
}


/* Creating a function to render another existing function and setting it to get the first and second cards at random 
    and summing them. All this is performed when it is clicked.
*/
function start() {   
    inTheGame = true;
    let theFirstCard = getRandomCard();
    let theSecondCard = getRandomCard();

    cards = [theFirstCard, theSecondCard];
    theSum = theFirstCard + theSecondCard;

    render();
}

// Same happens here and check each condition based on the card random numbers generated and gives the player a message //
function render() {

    cardEl.textContent = "Cards: You have got ";

    for(let i = 0; i < cards.length; i++) {
       cardEl.textContent = cardEl.textContent + cards[i] + " ";
    }

    if (theSum <= 20) {
        theMessage = "Do you want a new card?"
        inTheGame = true;
        HasBlackJack = false;
    }
    
    else if (theSum === 21) {
        theMessage = "Wohoo! You've got a Black Jack!";
        HasBlackJack = true;
        inTheGame = true;
    }
    
    else{
        theMessage = "You are out of the game!";
        HasBlackJack = false;
        inTheGame = false;
       
    }
    
    messageEl.textContent = theMessage;
    theSumEl.textContent = "Sum: " + theSum;
}

//  For clicking and selecting a new card if the user needs a new xard to get blackjack//
function newCard() {
    if (HasBlackJack === false && inTheGame === true) {

        let theCard = getRandomCard();
        theSum += theCard;
        cards.push(theCard);
   
        render();
    }
}
