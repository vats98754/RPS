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

// numRounds-round game that loops numRounds times over playRound(), passing in player's choice through prompt()
function game(numRounds = 5) {
    playerScore = 0;
    compScore = 0;
    console.log("Get ready for a best of " + numRounds + 
    " games, which will end as soon as you win the majority of rounds. Enjoy!");
    for (let i = 0; i < numRounds; ++i) {
        const pS = prompt("Enter your choice (Rock, Paper, or Scissors): ");
        console.log(playRound(pS, computerPlay()));
    }
    // Prints the final results of the game
    finalResults(playerScore, compScore);
}

// Global variables that get set to 0 at the start of each game, helping determine final game scores
let compScore = 0;
let playerScore = 0;

// Logs the final scores from a game on the console, determing the overall winner/loser
function finalResults(playerScore, compScore) {
    if (playerScore == compScore) {
        console.log("You tie the game! You scored " + playerScore + " while the computer scored " + compScore);
    } else if (playerScore > compScore) {
        console.log("You win the game! You scored " + playerScore + " while the computer scored " + compScore);
    } else {
        console.log("You lose the game! You scored " + playerScore + " while the computer scored " + compScore);
    }
}

// Asks user how many rounds they'd like to play and passes this to game()
const numRounds = Math.floor(prompt("How many rounds of Rock, Paper, Scissors would you like to play?"));
game(numRounds);