// program data:
var number = 8;
var guess;
var limit = 5;
var remaining = limit;
var won = false;
var guesses = [];

for (i = 0; i < limit; i++) {
    // prompt user for their guess

    guess = window.prompt("Guess a number!");
    guess = Number(guess);
    
    // if correct: let the user know they won
    
    // if incorrect: let the user know
    
    if (guess === number) {
        document.write("Correct!");
        won = true;
        break;
    } else {
        remaining--;
        window.alert("Try again! You have " + remaining + " tries remaining.");
    }
}

if (!won) {
    document.write("Better luck next time!");
}