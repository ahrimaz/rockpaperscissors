// makes comparisons between computer and player
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE","player chose",playerSelection)
        return "tie";
    }
    else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        console.log("COMPUTER CHOSE ROCK","player chose ",playerSelection);
        return "lose";
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        console.log("COMPUTER CHOSE SCISSORS","player chose",playerSelection);
        return "lose";
    }
    else if (computerSelection === "PAPER" && playerSelection == "ROCK") {
        console.log("COMPUTER CHOSE PAPER","player chose",playerSelection);
        return "lose";
    }
    else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        console.log("COMPUTER CHOSE ROCK","player chose",playerSelection);
        return "win";
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        console.log("COMPUTER CHOSE SCISSORS","player chose",playerSelection);
        return "win";
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        console.log("COMPUTER CHOSE PAPER","player chose",playerSelection);
        return "win";
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
    return getPlayerSelection;
}

let playerScore = 0
let computerScore = 0

function game() {
    let contest = playRound(playerSelection, computerSelection);
    for (let i = 0; i < 5; i++) {
    if (contest === "win") {
        playerScore++;
           alert("You've won this round. You have " + playerScore + " points. Opponent has " + computerScore + " points.");
    }
    else if (contest === "tie") {
        console.log("same option picked, tie");
    } 
    else if (contest === "lose") {
        computerScore++;
        alert("Computer wins this round. You have " + playerScore + " points. Opponent has " + computerScore + " points.");
    }

    if (computerScore === 5) {
        alert("Game over, you lose.");
    } else if (playerScore === 5) {
        alert("Game over, you win.");
    }
}
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();

game()