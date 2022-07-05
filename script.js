// For computer to generate R,P,S choice randomly
function random(range) {
    return Math.floor(range * Math.random());
}

// To generate the computer's actual choice depending on random()'s return value
function computerPlay() {
    const choiceNum = random(3);
    switch (choiceNum) {
        case 0:
            return("Rock");
            break;
        case 1:
            return("Paper");
            break;
        default:
            return("Scissors");
            break;
    }
}

// Capitalizes first letter of lowercased playerSelection to ensure fair comparison
function capitalizeFirstLetter(str) {
    return(str[0].toUpperCase() + str.slice(1));
}

// To play single round of RPS based on Player's choice and Computer's Choice
function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase();
    pS = capitalizeFirstLetter(pS);
    const cS = computerSelection;

    if (pS === cS) {
        return("You Tie! " + pS + " ties " + cS);
    } else {
        if ((pS === "Scissors" && cS === "Rock") || 
            (pS === "Paper" && cS === "Scissors") || 
            (pS === "Rock" && cS === "Paper")) {
            ++compScore;
            return("You Lose! " + cS + " beats " + pS);
        } else {
            ++playerScore;
            return("You Win! " + pS + " beats " + cS);
        }
    }
}

// 5-round game that loops 5 times over playRound(), passing in player's choice through prompt()
function game() {
    playerScore = 0;
    compScore = 0;
    console.log("Get ready for a best of 5 games, which will end as soon as you win the majority of (3) rounds. Begin!");
    for (let i = 0; i < 5; ++i) {
        const pS = prompt("Enter your choice (Rock, Paper, or Scissors): ");
        console.log(playRound(pS, computerPlay()));
    }
    // Prints the final results of the game
    finalResults(playerScore, compScore);
}

// Global variables that get set to 0 at the start of each game, helping determine final game scores
let compScore = 0;
let playerScore = 0;

function finalResults(playerScore, compScore) {
    if (playerScore == compScore) {
        console.log("You tie the game! You scored " + playerScore + " while the computer scored " + compScore);
    } else if (playerScore > compScore) {
        console.log("You win the game! You scored " + playerScore + " while the computer scored " + compScore);
    } else {
        console.log("You lose the game! You scored " + playerScore + " while the computer scored " + compScore);
    }
}

game();