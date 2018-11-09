// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var remaining = limit;
var won = false;
var guesses = [];
var previous;

function isPreviousGuess() {
    for (i = 0; i < guesses.length; i++) {
        if (guesses[i] === guess) {
            return true;
        }
    }

    return false;
}

for (i = 0; i < limit; i++) {
    // prompt user for their guess

    do {
        guess = parseInt(window.prompt("Guess a number!"));
        previous = isPreviousGuess();
    } while (previous === true || isNaN(guess));

    // if correct: let the user know they won
    
    // if incorrect: let the user know
    
    if (guess === number) {
        document.write("Correct!");
        won = true;
        break;
    } else {
        guesses[i] = guess;
        remaining--;
        window.alert("Incorrect! You have " + remaining + " tries remaining. \nPrevious guesses: " + guesses.toString());
    }
}

if (!won) {
    document.write("Better luck next time! The correct number was: " + number);
}