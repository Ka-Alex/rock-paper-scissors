"use strict"
//VARIABLE: create an integer variable for computerChoice, initVal = 0
let computerChoice = 0;
//VARIABLE: create a string variablefor called humanChoice, initVal ""
let humanChoice = "";
//VARIABLE: create two variables to keep track of the player and computer score
let humanScore = 0;
let computerScore = 0;

//FUNCTION: Randomly chooses a number between 0 and 2            
function getComputerChoice() {
    //returns 0, 1 or 2
    computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice){
        case 0: 
            computerChoice = "rock";
            break;
        case 1: 
            computerChoice = "scissors";
            break;
        case 2: 
            computerChoice = "paper";
            break;
        default : console.log("Invalid choice");
    }

    return computerChoice;
}

//FUNCTION/INPUT: Ask user a text input and put the answer in humanChoice
function getHumanChoice() {
    humanChoice = prompt("Rock, Scissors or Paper ?");
    if(humanChoice === null){
        return;
    } else {
        humanChoice = humanChoice.toLowerCase()
    }

    //CONDITION: if answer different than expected
    if ((humanChoice === "rock") || (humanChoice === "scissors") || (humanChoice === "paper")) {
        return humanChoice;
    } else {
        return;
    }
}


//AFFECTATION: put the string value inside humanChoice and computerChoice
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {

    if (humanChoice > computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore = ++humanScore;
    } else if (humanChoice < computerChoice) {
        console.log(`You lose! ${humanChoice} lose to ${computerChoice}`);
        computerScore = ++computerScore;
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie`);
    }
    }


playRound(humanSelection, computerSelection);
console.log(`Computer score : ${computerScore}`);
console.log(`Human score : ${humanScore}`);

