const submit = document.querySelector("#subt"); // submit guess
const userInput = document.querySelector("#guessField"); // box show
const guessSlot = document.querySelector(".guesses"); // previous guess
const remaining = document.querySelector(".lastResult"); // guess remaining
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas"); // previous or guess remaining or low or hi

let randomNumber = parseInt(Math.random() * 100 + 1);

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a greater number ");
  } else if (guess > 100) {
    alert("Please enter a smaller number ");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over . random number is ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    alert("Your guess it right");
  } else if (guess < randomNumber) {
    alert("Your guess it too low");
  } else if (guess > randomNumber) {
    alert("Your guess it too high");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = " ";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame>Start over new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const button = document.querySelector("#newGame");
  button.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
