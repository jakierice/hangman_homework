window.onload = function () {

    // define user interface object for quickly calling main page elements
    var ui = {
        current: document.getElementById('currentGuess'),
        previous: document.getElementById('allGuesses'),
        remain: document.getElementById('remainingGuesses'),
        wordHolder: document.getElementById('wordHolder'),
        // gameWord: document.getElementById('wordToGuess')
    }

    // define hangman word source and word array for manipulating UI
    var wordList = ["rain", "forest", "monkey", "snake", "tree", "canopy", "deforestation"];
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    var chosenWord = new Array(word.length);
    // set letters in chosenWord array to blank "underlined" letters
    for (var i = 0; i < chosenWord.length; i++) {
        chosenWord[i] = "_ ";
    }

    var allGuesses = [];
    // define variable for total # of guesses user has, starts at 15
    var remainingGuesses = 15;
    // define variable for # of correct guesses that user has made
    var correctCounter = 0;

    // create Hangman Game and core functions
    var hangman = {
        start: function () {
            ui.wordHolder.innerHTML = "The word is " + word.length + " letters long.";
        },
        guess: function (guess) {

            // push every guess into storage array
            allGuesses.push(guess);

            // replace blanks in word with correctly guessed letters
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess && allGuesses[i] !== guess) {
                    chosenWord[i] = guess;
                    correctCounter += 1;
                }
            }

            // create UL element for word to be guessed
            var gameWord = document.createElement('ul');
            gameWord.setAttribute('id', 'wordToGuess');

            for (var i = 0; i < word.length; i++) {
                // build word HTML element
                var gameLetter = document.createElement('li');
                var blankLetter = document.createTextNode(chosenWord[i]);

                gameLetter.appendChild(blankLetter);
                ui.wordHolder.appendChild(gameWord);
                gameWord.appendChild(gameLetter);
            }
        },
        track: function (guess) {
            for (var i = 0; i < allGuesses.length; i++) {
                ui.current.innerHTML = guess;
            }
            var guessedLetter = document.createElement('li');
            guessedLetter.innerHTML = guess;
            ui.previous.appendChild(guessedLetter);

            var remainingCounter = document.createElement('div');
            // display a countdown for the # of guesses user has left
            ui.remain.innerHTML = remainingGuesses;
        },
        lose: function () {
            ui.remain.innerHTML = "GAME OVER";
            ui.remain.style.fontSize = "5em";

        },
        win: function () {
            ui.remain.innerHTML = "YOU WIN!";
            ui.remain.style.fontSize = "5em";
        }
    }

    function playHangman(guess) {
        hangman.start();
        console.log(word);

        if (remainingGuesses >= 1) {
            hangman.guess(guess);
            hangman.track(guess);
            remainingGuesses -= 1;
        } else {
            hangman.lose();
        }

        if (correctCounter === word.length) {
            hangman.win();
        }
    }


    document.onkeyup = function (event) {
        var key = event.keyCode;
        var guess = event.key.toLowerCase();

        // if key is alphanumerical, play hangman!
        if (key >= 48 && key <= 90) {
            playHangman(guess);
        }
    }

}