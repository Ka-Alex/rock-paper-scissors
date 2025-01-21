"use strict"
let computerChoice = 0;
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default: console.log("Invalid choice");
    }

    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Scissors or Paper ?");
    // user cancel the prompt window
    if (humanChoice === null) {
        return;
    } else {
        humanChoice = humanChoice.toLowerCase()
    }

    // allow only the three string values
    if ((humanChoice === "rock") || (humanChoice === "scissors") || (humanChoice === "paper")) {
        return humanChoice;
    } else {
        console.assert("False");
        return;
    }
}

// score round by round and final score with finalRound parameter
function countScore(humanScore, computerScore, finalRound) {
    let winnerOrLoser = "";
    if(humanScore > computerScore) {
        winnerOrLoser = `You win the game ${`\u{1F973}`}!`
    } else if(humanScore < computerScore) {
        winnerOrLoser = `You lose the game ${`\u{1F62D}`}!`
    } else {
        winnerOrLoser = `It's a tie ${`\u{1F635}`}!`
    }
    if(finalRound){
        console.log(`%c Final results : ${winnerOrLoser}`,
            `font-size: 20px; color: red`);
            console.table({"You":`${humanScore} point(s)`, "Computer":`${computerScore} point(s)`})
    }
}

// a game is 5 rounds
function playGame(round = 0) {

    console.log(`%c Start of the game`, `font-size: 20px; color: blue`);
    
    function playRound() {
        ++round;

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

            switch (humanSelection + computerSelection) {
                case "rockscissors":
                case "scissorspaper":
                case "paperrock":
                    console.log(`%c Round ${round}: `,`font-size: 15px`, `You win the round ${"\u{1F60E}"}! ${humanSelection} beats ${computerSelection}`);
                    humanScore++; 
                    break;
                case "rockpaper":
                case "paperscissors":
                case "scissorsrock":  
                    console.log(`%c Round ${round}: `,`font-size: 15px`,`You lose the round ${"\u{1F62D}"}! ${humanSelection} lose to ${computerSelection}`);
                    computerScore++;
                    break;
                case "rockrock":
                case "scissorsscissors":
                case "paperpaper":        
                    console.log(`%c Round ${round}: `,`font-size: 15px`, `It's a tie in this round ${"\u{1F632}"}! You both chose ${humanSelection}`);
                    break;    
            }
           }

    playRound();
    countScore(humanScore, computerScore)

    playRound();
    countScore(humanScore, computerScore)

    playRound();
    countScore(humanScore, computerScore)

    playRound();
   countScore(humanScore, computerScore)

    playRound();
    countScore(humanScore, computerScore)
}

playGame();

//Final score
countScore(humanScore, computerScore, true);