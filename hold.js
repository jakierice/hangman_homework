window.onload = function () {
    var allGuesses = [];
    var ui = {
        current: document.getElementById('currentGuess'),
        previous: document.getElementById('allGuesses'),
        remain: document.getElementById('remainingGuesses'),
        wordHolder: document.getElementById('wordHolder')
    }
    var wordList = ["rain", "forest", "monkey", "snake", "tree", "canopy", "deforestation"];
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    var chosenWord = new Array(word.length);
    for (var i = 0; i < chosenWord.length; i++) {
        chosenWord[i] = "_ ";
    }
    console.log(chosenWord);

    // guesses user has left
    var remainingGuesses = 15;

    var correctGuesses = [];
    // # of gameWord guesses that user has made
    var correctCounter = 1;
    // number of letters in the word

    document.onkeyup = function (event) {

        var key = event.keyCode;
        var guess = event.key.toLowerCase();

        ui.current.style.display = 'block';
        ui.previous.style.display = 'inline';
        allGuesses.push(guess);


        function countGuesses() {
            // decrease number of guesses user has left
            remainingGuesses -= 1;
        }

        function recordGuesses() {

            if (allGuesses.length <= 10) {
                for (var i = 0; i < allGuesses.length; i++) {
                    ui.current.innerHTML = guess;
                }
                var guessedLetter = document.createElement('li');
                guessedLetter.innerHTML = guess;
                ui.previous.appendChild(guessedLetter);

                var remainingCounter = document.createElement('div');
            }
        }

        function showCount() {
            ui.remain.style.display = "block";
            ui.remain.innerHTML = remainingGuesses;
            console.log(remainingGuesses);
            if (remainingGuesses >= 1) {
                recordGuesses();
            } else {
                ui.remain.style.fontSize = "5em";
                ui.remain.innerHTML = "Game Over";
            }

            for (var i = 0; i < allGuesses.length; i++) {
                if (correctCounter === word.length) {
                    ui.remain.innerHTML = "You Win!";
                    ui.remain.style.fontSize = "5em";
                }
            }
        }

        function guessWord() {

            gameWord = document.createElement('ul');
            ui.wordHolder.style.display = 'block';
            ui.wordHolder.innerHTML = "The word is " + word.length + " letters long.";

            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    chosenWord[i] = guess;
                    correctCounter += 1;
                    console.log(chosenWord);
                }
            }

            for (var i = 0; i < word.length; i++) {

                gameWord.setAttribute('id', 'wordToGuess');
                gameLetter = document.createElement('li');
                gameLetter.setAttribute('class', 'guess');
                var blankLetter = document.createTextNode(chosenWord[i]);
                gameLetter.appendChild(blankLetter);

                ui.wordHolder.appendChild(gameWord);
                gameWord.appendChild(gameLetter);
            }
        }

        countGuesses();
        // recordGuesses();
        showCount();
        guessWord();
    }
}