window.onload = function () {
    var allGuesses = [];
    var userGuesses = {
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
    // # of correct guesses that user has made
    var counter = 1;
    // number of letters in the word

    document.onkeyup = function (event) {

        var key = event.keyCode;
        var guess = event.key.toLowerCase();
        var count = allGuesses.length;

        userGuesses.current.style.display = 'block';
        userGuesses.previous.style.display = 'inline';
        allGuesses.push(guess);


        function countGuesses() {
            // decrease number of guesses user has left
            remainingGuesses -= 1;
        }

        function recordGuesses() {

            if (allGuesses.length <= 10) {
                for (var i = 0; i < allGuesses.length; i++) {
                    userGuesses.current.innerHTML = guess;
                }
                var guessedLetter = document.createElement('li');
                guessedLetter.innerHTML = guess;
                userGuesses.previous.appendChild(guessedLetter);

                var remainingCounter = document.createElement('div');
            }
        }

        function showCount() {
            userGuesses.remain.style.display = "block";
            userGuesses.remain.innerHTML = remainingGuesses;
            console.log(remainingGuesses);
            if (remainingGuesses >= 1) {
                recordGuesses();
            } else {
                userGuesses.remain.style.fontSize = "5em";
                userGuesses.remain.innerHTML = "Game Over";
            }

            for (var i = 0; i < allGuesses.length; i++) {
                if (counter === word.length) {
                    userGuesses.remain.innerHTML = "You Win!";
                    userGuesses.remain.style.fontSize = "5em";
                }
            }
        }

        function guessWord() {

            correct = document.createElement('ul');
            userGuesses.wordHolder.style.display = 'block';
            userGuesses.wordHolder.innerHTML = "The word is " + word.length + " letters long.";

            for (var i = 0; i < word.length; i++) {
                word[i] = "_";
            }

            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    chosenWord[i] = guess;
                    counter += 1;
                    console.log(chosenWord);
                }
            }

            for (var i = 0; i < word.length; i++) {

                correct.setAttribute('id', 'wordToGuess');
                guessLetter = document.createElement('li');
                guessLetter.setAttribute('class', 'guess');
                var blankLetter = document.createTextNode(chosenWord[i]);
                guessLetter.appendChild(blankLetter);

                wordHolder.appendChild(correct);
                correct.appendChild(guessLetter);
            }


        }

        countGuesses();
        // recordGuesses();
        showCount();
        guessWord();
    }
}