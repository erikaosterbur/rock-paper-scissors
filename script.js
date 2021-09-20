
var rock = "R";
var paper = "P";
var scissors = "S";
var options = ["R", "P", "S"];
var again = true;
var win = 0;
var lose = 0;
var tie = 0;

function randomComputerOutput(){
    var random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function runGame() {
    var oneTime = randomComputerOutput();
    var userSelection = window.prompt("Choose rock (R), paper (P), or scissors (S)");
    if (userSelection === null) {
        again = false;
        return;
    }
    console.log(oneTime);
    if (userSelection === rock && oneTime === rock) {
        tie = tie + 1;
        alert ("Computer chose Rock. Tie!");
    }
    else if (userSelection === rock && oneTime === paper) {
        lose = lose + 1;
         alert ("Computer chose Paper. Computer wins!");
        }
    else if (userSelection === rock && oneTime === scissors) {
        win = win + 1;
         alert ("Computer chose Scissors. You win!");
    }
    else if (userSelection === paper && oneTime === paper) {
        tie = tie + 1;
         alert ("Computer chose Paper. Tie!");
    }
    else if (userSelection === paper && oneTime === rock) {
        win = win + 1;
         alert ("Computer chose Rock. You win!");
    }
    else if (userSelection === paper && oneTime === scissors) {
         alert ("Computer chose Scissors. Computer wins!");
         lose = lose + 1;
    }
    else if (userSelection === scissors && oneTime === scissors) {
         alert ("Computer chose Scissors. Tie!");
         tie = tie + 1;
    }
    else if (userSelection === scissors && oneTime === rock) {
        lose = lose + 1;
         alert ("Computer chose Rock. Computer wins!");
    }
    else if (userSelection === scissors && oneTime === paper) {
         alert ("Computer chose Paper. You win!");
         win = win + 1;
    }
    else {
        window.confirm("Choose R, P, or S")
    }
    again = window.confirm("Wins = " + win + "\nLosses = " + lose + "\nTies = " + tie + "\nDo you want to play again?");
}

while (again === true) {
    runGame();
}







    

