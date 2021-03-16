let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);

const compareGuesses = (userGuess, computerGuess, target) => {
    if (userGuess < 0 || userGuess > 9) {
        alert("Out of range!")
    }

    if (userGuess === computerGuess) {
        return true;
    }
    
    if (getAbsoluteDistance(userGuess, target) < getAbsoluteDistance(computerGuess, target)) {
        return true;
    }

    return false;
}

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        default:
            computerScore++;
            break;
    }
}

const advanceRound = () => currentRoundNumber++;