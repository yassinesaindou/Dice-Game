'use strict';
const rollBtn = document.querySelector('.roll-dice');
const getDice = document.querySelector('.dice-image');
const holdDice = document.querySelector('.hold-btn');
const restartGame = document.querySelector('.new-game');
let cummulatedScore = 0;
let playerScore = 0;
let currentPlayer = 1;
// Add events onclick

rollBtn.addEventListener('click',()=>{
    const dice = Math.round(Math.random()*5+1);
    getDice.src =`/Image/dice_${dice}.png`;


    //Check if the player can play. (If the dice is not equal to 1)
    if(dice !=1){
        playerScore+=dice;
        document.querySelector(`#current--${currentPlayer}`).textContent = playerScore;
    }

    // Chage the player if dice is equal to 1
    else{
        document.querySelectorAll(`.card-side`).forEach((player)=>{
            player.classList.toggle('apply-opacity')
        })

        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        playerScore =0;
        currentPlayer =(currentPlayer ===1)?2:1;
    }
})
// Implementation of the hold function

holdDice.addEventListener('click', ()=>{
    //Take calculate the current score and add it into the 
    document.querySelectorAll(`.card-side`).forEach((player)=>{
        player.classList.toggle('apply-opacity')
    })
    cummulatedScore+= playerScore;
    // The the current total Score
    const currentTotalScore = Number(document.
        querySelector(`#score--${currentPlayer}`).textContent);
        // Add the value after rolling the dice ane the current total Score
    document.querySelector(`#score--${currentPlayer}`).textContent = 
     cummulatedScore+ currentTotalScore;

     // Check id the cuurent player won and remove the blur
     if(cummulatedScore + currentTotalScore >=100){
        document.querySelector(`.player--${currentPlayer}`).classList.add('won');

        document.querySelectorAll(`.card-side`).forEach((player)=>{
            player.classList.remove('apply-opacity')
        })
        
     }
     // Initialze the numbers too zero
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    playerScore=0;
    cummulatedScore =0;
    // Change the Player
    currentPlayer =(currentPlayer ===1)?2:1;
})

// New Game functionality
restartGame.addEventListener('click', ()=>{
    location.reload();
});
