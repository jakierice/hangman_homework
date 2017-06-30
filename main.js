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

    // guesses user has left
    var remainingGuesses = 10;
    // # of guesses that user has made
    var counter = 0;
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
            // increase the count of guesses that user has made
            counter += 1;
        }

        function recordGuesses() {

            if (counter <= 10) {
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
            if (remainingGuesses < 1) {
                userGuesses.remain.style.fontSize = "5em";
                userGuesses.remain.innerHTML = "Game Over";

            }
            for (var i = 0; i < allGuesses.length; i++) {
                if (counter === allGuesses.length) {
                    userGuesses.remain.innerHTML = "You Win!";
                }
            }

        }

        function guessWord() {

            correct = document.createElement('ul');
            userGuesses.wordHolder.style.display = 'block';
            userGuesses.wordHolder.innerHTML = "The word is " + word.length + " letters long.";

            for (var i = 0; i < word.length; i++) {
                correct.setAttribute('id', 'wordToGuess');
                guessLetter = document.createElement('li');
                guessLetter.setAttribute('class', 'guess');
                if (word[i] !== guess) {
                    guessLetter.innerHTML = "_";
                } else {
                    guessLetter.innerHTML = guess;
                }

                // geusses.push(guess);
                wordHolder.appendChild(correct);
                correct.appendChild(guessLetter);
            }
        }

        countGuesses();
        recordGuesses();
        showCount();
        guessWord();
    }
}