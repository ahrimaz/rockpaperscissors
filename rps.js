// makes comparisons between computer and player
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE","player chose",playerSelection)
    }
    else if (computerSelection === "ROCK") {
        console.log("COMPUTER CHOSE ROCK","player chose ",playerSelection);
    }
    else if (computerSelection === "SCISSORS") {
        console.log("COMPUTER CHOSE PAPER","player chose",playerSelection);
    }
    else if (computerSelection === "PAPER") {
        console.log("COMPUTER CHOSE SCISSORS","player chose",playerSelection);
    }
}

// generates the computer's choice at random
function getComputerChoice(computerSelection) {
    let getComputerChoice = Math.floor(Math.random() * 3);
    switch(getComputerChoice) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "SCISSORS";
            break;
        case 2:
            return "PAPER";
            break;
    }
}

// gets the player's choice
function getPlayerSelection(playerSelection) {
    let getPlayerSelection = prompt("please make a choice").toUpperCase();
    console.log(getPlayerSelection);
    return getPlayerSelection;
}


const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

