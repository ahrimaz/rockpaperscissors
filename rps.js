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

function getComputerChoice(computerSelection) {
    let getComputerChoice = Math.floor(Math.random() * 3);
    if (getComputerChoice === 0) {
        return "ROCK";
    } else if (getComputerChoice === 1) {
        return "SCISSORS";
    } else if (getComputerChoice === 2) {
        return "PAPER";
    }
    console.log(getComputerChoice);
}

function getPlayerSelection(playerSelection) {
    let getPlayerSelection = prompt("please make a choice").toUpperCase();
    console.log(getPlayerSelection);
    return getPlayerSelection;
}


const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

