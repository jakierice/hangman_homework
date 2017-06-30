window.onload = function () {
    var allGuesses = [];
    var userGuesses = {
        current: document.getElementById('currentGuess'),
        previous: document.getElementById('allGuesses'),
        remain: document.getElementById('remainingGuesses'),
    }
    // guesses user has left
    var remainingGuesses = 10;
    // # of guesses that user has made
    var counter = 0;
    // number of letters in the word
    var space = 5;


    document.onkeyup = function (event) {

        var key = event.keyCode;
        var guess = event.key.toUpperCase();
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
                if (counter + space === allGuesses.length) {
                    userGuesses.remain.innerHTML = "You Win!";
                }
            }
        }
        countGuesses();
        recordGuesses();
        showCount();
    }


}

check = function () {
    list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
            }
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
            lives -= 1;
            comments();
            animate();
        } else {
            comments();
        }
    }
}