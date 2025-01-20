//VARIABLE: create an integer variable for computerChoice, initVal = 0
let computerChoice = 0;

//FUNCTION: Randomly chooses a number between 0 and 2            
function getComputerChoice() {
    //returns 0, 1 or 2
    computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice){
        case 0: 
            computerChoice = "Rock";
            break;
        case 1: 
            computerChoice = "Scissors";
            break;
        case 2: 
            computerChoice = "Paper";
            break;
        default : console.log("Invalid choice");
    }

    return computerChoice;
}

//AFFECTATION: put this string value inside humanChoice
computerChoice = getComputerChoice();
console.log(computerChoice);