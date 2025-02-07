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

function getHumanChoice(event) {

    humanChoice = event.target.id.toLocaleLowerCase();
  
    // allow only the three string values
    if ((humanChoice === "rock") || (humanChoice === "scissors") || (humanChoice === "paper")) {
        return humanChoice;
    } else {
        console.assert("False");
        return;
    }
}

function playRound(event) {
    const humanSelection = getHumanChoice(event);
    const computerSelection = getComputerChoice();

            switch (humanSelection + computerSelection) {
                case "rockscissors":
                case "scissorspaper":
                case "paperrock":
                    console.log(`You win ${"\u{1F60E}"}! ${humanSelection} beats ${computerSelection}`);
                    humanScore++; 
                    break;
                case "rockpaper":
                case "paperscissors":
                case "scissorsrock":  
                    console.log(`You lose ${"\u{1F62D}"}! ${humanSelection} lose to ${computerSelection}`);
                    computerScore++;
                    break;
                case "rockrock":
                case "scissorsscissors":
                case "paperpaper":        
                    console.log(`It's a tie ${"\u{1F632}"}! You both chose ${humanSelection}`);
                    break;    
            }
           //++round;
           }



// score round by round and final score with finalRound parameter
function countScore(humanScore, computerScore, finalRound) {
    // let winnerOrLoser = "";
    // if(humanScore > computerScore) {
    //     winnerOrLoser = `You win the game ${`\u{1F973}`}!`
    // } else if(humanScore < computerScore) {
    //     winnerOrLoser = `You lose the game ${`\u{1F62D}`}!`
    // } else {
    //     winnerOrLoser = `It's a tie ${`\u{1F635}`}!`
    // }
    // if(finalRound){
    //     console.log(`%c Final results : ${winnerOrLoser}`,
    //         `font-size: 20px; color: red`);
    //         console.table({"You":`${humanScore} point(s)`, "Computer":`${computerScore} point(s)`})
    // }
}

// a game is 5 rounds
function playGame() {
//     console.log(`%c Start of the game`, `font-size: 20px; color: blue`);

//     playRound();
//     countScore(humanScore, computerScore)

}

//playGame();

//Final score
//countScore(humanScore, computerScore, true);


    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissors = document.querySelector('#scissors');

    btnRock.addEventListener('click', playRound);
    btnPaper.addEventListener('click', playRound);
    btnScissors.addEventListener('click', playRound);
    