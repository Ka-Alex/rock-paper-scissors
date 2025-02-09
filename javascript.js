"use strict"
let computerChoice = 0;
let humanChoice = "";

let humanScore = 0;
let computerScore = 0;
let round = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

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

    round++;
    let isFinalRound = false;

    const humanSelection = getHumanChoice(event);
    const computerSelection = getComputerChoice();

    switch (humanSelection + computerSelection) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            humanScore++;
            displayResults(round, 'win', humanSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerScore++;
            displayResults(round, 'lose', humanSelection, computerSelection);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            displayResults(round, 'tie', humanSelection, computerSelection);
            break;
    }

    countScore(round, humanScore, computerScore, isFinalRound);
    
}

function displayResults(round, result, humanSelection, computerSelection, isFinalRound = false) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let resultMessage = '';

    if(!isFinalRound) {
        switch (result) {
            case 'win':
                resultMessage = document.createTextNode(`Round ${round}: You win ${"\u{1F60E}"}! ${humanSelection} beats ${computerSelection}`);
                break;
            case 'lose':
                resultMessage = document.createTextNode(`Round ${round}:  You lose ${"\u{1F62D}"}! ${humanSelection} lose to ${computerSelection}`);
                break;
            case 'tie':
                resultMessage = document.createTextNode(`Round ${round}:  It's a tie ${"\u{1F632}"}! You both chose ${humanSelection}`);
                break;
    
        }
        div.style.marginTop = '10px';
        div.appendChild(resultMessage);
       
    } else {
        switch (result) {
            case 'win':
                resultMessage = document.createTextNode(`You win the game ${"\u{1F60E}"}! ${humanScore} - ${computerScore}`);
                div.style.color = '#097969';
                break;
            case 'lose':
                resultMessage = document.createTextNode(`You lose the game ${"\u{1F62D}"}! ${computerScore} - ${humanScore} `);
                div.style.color = '#C70039';
                break;
            case 'tie':
                resultMessage = document.createTextNode(`It's a tie ${"\u{1F632}"}!`);
                break;
    
        }
        div.style.fontSize = '30px';
        div.appendChild(resultMessage);
    }
}

function countScore(round, humanScore, computerScore, isFinalRound) {

    //The first to five points wins the game
    if (humanScore === 5 || computerScore === 5) {
        isFinalRound = true;

        btnRock.removeEventListener('click', playRound);
        btnPaper.removeEventListener('click', playRound);
        btnScissors.removeEventListener('click', playRound);

        if (humanScore > computerScore) {
            displayResults(round, 'win',"","", true);
        } else if (humanScore < computerScore) {
            displayResults(round, 'lose',"","", true);
        } else {
            displayResults(round,'tie',"","", true);
        }
    }

}


