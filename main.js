window.onload = function () {

    document.onkeyup = function (event) {

        var key = event.keyCode;
        var guess = event.key.toLowerCase();

        // var guessedLetters = [];
        console.log(guess);

        for (var i = 0; i < 10; i++) {
            document.getElementById('guessesLeft').innerHTML = "Guesses: " + guess;
        }
    }
}