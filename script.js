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
    while(gamesPlayed < numRounds){
        ++gamesPlayed;
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
                computerScoreElement.textContent = compScore;
                return("You Lose! " + cS + " beats " + pS);
            } else {
                ++playerScore;
                playerScoreElement.textContent = playerScore;
                return("You Win! " + pS + " beats " + cS);
            }
        }
    }
}

const btnList = document.querySelectorAll(".player-choice");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const roundResultTitle = document.querySelector(".round-result-title");
const roundResultText = document.querySelector(".round-result-text");

btnList.forEach(btn => btn.addEventListener("click", function(e) {
    roundResultText.textContent = playRound(btn.textContent, computerPlay());
    console.log(gamesPlayed);
    if (gamesPlayed === numRounds) {
        btnList.forEach((btn) => {
            btn.disabled = true;
        });
        finalResults(playerScore, compScore);
    }
}));

// // numRounds-round game that loops numRounds times over playRound(), passing in player's choice through prompt()
// function game(numRounds = 5) {
//     playerScore = 0;
//     compScore = 0;
//     // console.log("Get ready for a best of " + numRounds + 
//     // " games, which will end as soon as you win the majority of rounds. Enjoy!");
//     for (let i = 0; i < numRounds; ++i) {
//         const pS = prompt("Enter your choice (Rock, Paper, or Scissors): ");
//         console.log(playRound(pS, computerPlay()));
//     }
//     // Prints the final results of the game
//     finalResults(playerScore, compScore);
// }

// Global variables that get set to 0 at the start of each game, helping determine final game scores
let compScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

// Logs the final scores from a game on the console, determing the overall winner/loser
function finalResults(playerScore, compScore) {
    roundResultText.textContent = "";
    if (playerScore === compScore) {
        roundResultTitle.textContent = "You tie the game! You scored " + playerScore + " while the computer scored " + compScore;
        playerScoreElement.style.color = "greenyellow";
        computerScoreElement.style.color = "greenyellow";
    } else if (playerScore > compScore) {
        roundResultTitle.textContent = "You win the game! You scored " + playerScore + " while the computer scored " + compScore;
        playerScoreElement.style.color = "greenyellow";
    } else if (playerScore < compScore) {
        roundResultTitle.textContent = "You lose the game! You scored " + playerScore + " while the computer scored " + compScore;
        computerScoreElement.style.color = "greenyellow";
    }
}

// Asks user how many rounds they'd like to play and passes this to game()
const numRounds = Math.floor(prompt("How many rounds of Rock, Paper, Scissors would you like to play?"));
// game(numRounds);