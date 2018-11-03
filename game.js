var userChoices = "abcdefghijklmnopqrstuvwxyz";

console.log(userChoices.toLowerCase());

var lettersGuessed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuess = [];



var directionsText = document.getElementById("directions-text");
var userChoicesTextletter = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessesAlreadyText = document.getElementById("guesses-already");
var pcChoice = lettersGuessed[Math.floor(Math.random() * lettersGuessed.length)];


    document.onkeypress = function (event) {
    var userGuess = event.key;
    lettersGuess.push(userGuess.toLowerCase());
    console.log(userGuess);

    console.log(pcChoice);


    if (userGuess === pcChoice) {
        alert("You Must Be Psychic!"); 
        wins++;
        console.log(wins);
        guessesLeft = 9;
        lettersGuess = [];
        pcChoice = lettersGuessed[Math.floor(Math.random() * lettersGuessed.length)];
    } else {
        if (guessesLeft===0){
            //increment losses and restart and select new letter
            losses++;
            alert('You Lose');
            guessesLeft = 9;
            lettersGuess = [];
            pcChoice = lettersGuessed[Math.floor(Math.random() * lettersGuessed.length)];
            
        }else{
            guessesLeft--;
            
        }
        
    }

    document.getElementById('wins-text').textContent = "Wins: " + wins;
    document.getElementById('losses-text').textContent = "Losses: " + losses;
    document.getElementById('guesses-left').textContent = "Guesses Left: " + guessesLeft;
    document.getElementById('guessed-already').textContent = 'Guessed So Far: ' + lettersGuess;


}

