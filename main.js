window.onload = function () {
    var allGuesses = [];

    document.onkeyup = function (event) {

        var key = event.keyCode;
        var guess = event.key.toUpperCase();

        document.getElementById('currentGuess').style.display = 'block';
        document.getElementById('allGuesses').style.display = 'inline';
        allGuesses.push(guess);

        for (var i = 0; i < allGuesses.length; i++) {
            document.getElementById('currentGuess').innerHTML = guess;
        }

        var guessedLetter = document.createElement('li');
        guessedLetter.innerHTML = guess;
        document.getElementById('guessList').appendChild(guessedLetter);

        console.log(allGuesses);
    }
}