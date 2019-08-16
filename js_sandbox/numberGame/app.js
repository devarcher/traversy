// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "playAgain") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate Range
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if winning number
  if (guess === winningNum) {
    // Game Over Won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over
      gameOver(
        false,
        `Game over. ${winningNum} was the answer. You lose, TRY AGAIN.`
      );
    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red;");

  // Disable input
  guessInput.disabled = true;
  // Change Border to green
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);
  // Play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "playAgain";
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
