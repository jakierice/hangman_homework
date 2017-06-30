window.onload = function () {

    document.onkeyup = function (event) {

        var key = event.keyCode;
        var guess = event.key.toUpperCase();

        console.log(guess);
        document.getElementById('guesses').style.display = 'block';

        for (var i = 0; i < 10; i++) {
            document.getElementById('guesses').innerHTML = guess;
        }
    }
}