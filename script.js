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
        if ((pS === "Scissors" && cS === "Rock") || (pS === "Paper" && cS === "Scissors") || (pS === "Rock" && cS === "Paper")) {
            return("You Lose! " + cS + " beats " + pS);
        } else {
            return("You Win! " + pS + " beats " + cS);
        }
    }
}