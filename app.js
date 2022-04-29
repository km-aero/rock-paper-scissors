function computerPlay() {
    choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "rock";

        case 2:
            return "scissors";

        case 3:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    let result;

    // rock beats scissors
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "player";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "computer";
    }

    // scissors beats paper
    if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "player";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "computer";
    }

    // paper beats rock
    if (playerSelection === "paper" && computerSelection === "rock") {
        result = "player";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "computer";
    }

    // draw
    if (playerSelection === computerSelection) {
        result = "draw";
    }

    return result;
}

function game(playerSelection) {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Computer: " + computerPlay());
        console.log("Player: " + playerSelection);

        winner = playRound(playerSelection, computerPlay());

        console.log("--------------------------");
        console.log("Winner: " + winner);
        console.log("--------------------------");

        if (winner === "player") {
            playerWins += 1
        } else if (winner === "computer") {
            computerWins += 1
        }
    }

    if (playerWins > computerWins) {
        return `Player wins with ${playerWins} games won`;
    } else if (computerWins > playerWins) {
        return `Computer wins with ${computerWins} games won`;
    } else {

    }
}

let playerChoice = prompt("Let's play rock, paper, scissors!");  // needs validation to force string

console.log("--------------------------");
console.log(game(playerChoice));
console.log("--------------------------");