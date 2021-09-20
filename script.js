
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
        tie++;
        alert ("Computer chose Rock. Tie!");
    }
    else if (userSelection === rock && oneTime === paper) {
        lose++;
         alert ("Computer chose Paper. Computer wins!");
        }
    else if (userSelection === rock && oneTime === scissors) {
        win++;
         alert ("Computer chose Scissors. You win!");
    }
    else if (userSelection === paper && oneTime === paper) {
        tie++;
         alert ("Computer chose Paper. Tie!");
    }
    else if (userSelection === paper && oneTime === rock) {
        win++;
         alert ("Computer chose Rock. You win!");
    }
    else if (userSelection === paper && oneTime === scissors) {
         alert ("Computer chose Scissors. Computer wins!");
         lose++;
    }
    else if (userSelection === scissors && oneTime === scissors) {
         alert ("Computer chose Scissors. Tie!");
         tie++;
    }
    else if (userSelection === scissors && oneTime === rock) {
        lose++;
         alert ("Computer chose Rock. Computer wins!");
    }
    else if (userSelection === scissors && oneTime === paper) {
         alert ("Computer chose Paper. You win!");
         win++;
    }
    else {
        window.confirm("Choose R, P, or S") 
    }
    again = window.confirm("Wins = " + win + "\nLosses = " + lose + "\nTies = " + tie + "\nDo you want to play again?");
}

while (again === true) {
    runGame();
}







    

