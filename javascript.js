//VARIABLE: create an integer variable for computerChoice, initVal = 0
let computerChoice = 0;
//VARIABLE: create a string variablefor called humanChoice, initVal ""
let humanChoice = "";

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
    humanChoice = prompt("Rock, Scissors or Paper ?").toLowerCase();
    //CONDITION: if answer different than expected
    if ((humanChoice === "rock") || (humanChoice === "scissors") || (humanChoice === "paper")) {
        console.log("Your choice is valid")
    } else console.log('Invalid choice');

    return humanChoice;
}
//AFFECTATION: put this string value inside humanChoice
humanChoice = getHumanChoice();
console.log(humanChoice);