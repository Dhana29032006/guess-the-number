const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    const guess = Number(input.value);

    if (!guess || guess < 1 || guess > 10) {
        message.textContent = "⚠️ Please enter a number between 1 and 10.";
        message.style.color = "red";
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        message.style.color = "green";
    } else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "orange";
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
    input.value = "";
}
