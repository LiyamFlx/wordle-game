const secretWord = "weary";
let attempts = 6;

document.getElementById("submit-btn").addEventListener("click", function() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 5) {
        document.getElementById("message").textContent = "Please enter a 5-letter word.";
        return;
    }

    const guessDiv = document.createElement("div");
    guessDiv.classList.add("guess");
    document.getElementById("guesses").appendChild(guessDiv);

    for (let i = 0; i < 5; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        if (guess[i] === secretWord[i]) {
            tile.classList.add("green");
        } else if (secretWord.includes(guess[i])) {
            tile.classList.add("yellow");
        } else {
            tile.classList.add("gray");
        }

        tile.textContent = guess[i];
        guessDiv.appendChild(tile);
    }

    attempts--;

    if (guess === secretWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word!";
        document.getElementById("submit-btn").disabled = true;
    } else if (attempts === 0) {
        document.getElementById("message").textContent = `Game Over! The word was "${secretWord}".`;
        document.getElementById("submit-btn").disabled = true;
    }

    guessInput.value = "";
});
