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
        result = "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Computer Wins. Boo!";
    }

    // scissors beats paper
    if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Computer Wins. Boo!";
    }

    // paper beats rock
    if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "Computer Wins. Boo!";
    }

    // draw
    if (playerSelection === computerSelection) {
        result = "It's a draw";
    }

    return result;
}

function resultAndScores(playerSelection, result) {
    // play one game and return the result
    result[0] = playRound(playerSelection, computerPlay());

    // increment the winners score
    if (result[0] === 'You win!') {
        result[1] += 1;
        return result;
    } else if (result[0] === 'Computer Wins. Boo!') {
        result[2] += 1;
        return result;
    } else if (result[0] === "It's a draw") {
        result[3] += 1;
        return result;
    }
}

function checkWinner(result) {
    let winner;

    // check who has won
    if (result[1] === 5) {
        winner = 'player';
    } else if (result[2] === 5) {
        winner = 'computer';
    };
    
    // reset scores and return text for winner
    if (winner === 'player') {
        return 'Congratulations, you win!!!';
    } else if (winner === 'computer') {
        return 'Dun dun dunnnn, computer wins!';
    }
};

function resetResults(resultHeading, scores, result) {
    if (resultHeading.textContent) {
        scores[0].textContent = 0;
        scores[1].textContent = 0;
        scores[2].textContent = 0;

        result[1] = 0;
        result[2] = 0;
        result[3] = 0;
    };
}

const resultP = document.createElement('p');
const winnerHeading = document.querySelector('#winner');

const playerScoreP = document.querySelector('#player');
const computerScoreP = document.querySelector('#computer');
const drawScoreP = document.querySelector('#draw');
const scoreArray = [playerScoreP, computerScoreP, drawScoreP]

const resultDiv = document.querySelector('#result');
const scoresDiv = document.querySelector('#scores');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

let result = ['', 0, 0, 0];

rockButton.addEventListener('click', () => {
    [resultP.textContent, playerScoreP.textContent, computerScoreP.textContent, drawScoreP.textContent] = resultAndScores('rock', result);
    winnerHeading.textContent = checkWinner(result);
    resetResults(winnerHeading, scoreArray, result);
});

paperButton.addEventListener('click', () => {
    [resultP.textContent, playerScoreP.textContent, computerScoreP.textContent, drawScoreP.textContent] = resultAndScores('paper', result);
    winnerHeading.textContent = checkWinner(result);
    resetResults(winnerHeading, scoreArray, result);
});

scissorsButton.addEventListener('click', () => {
    [resultP.textContent, playerScoreP.textContent, computerScoreP.textContent, drawScoreP.textContent] = resultAndScores('scissors', result);
    winnerHeading.textContent = checkWinner(result);
    resetResults(winnerHeading, scoreArray, result);
});

resultDiv.appendChild(resultP);