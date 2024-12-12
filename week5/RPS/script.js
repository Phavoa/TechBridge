const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const roundResultEl = document.getElementById("round-result");
const finalResultEl = document.getElementById("final-result");
const resetButton = document.querySelector(".reset");
const playerIcon = document.getElementById("player-icon");
const computerIcon = document.getElementById("computer-icon");

let playerScore = 0;
let computerScore = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  playerIcon.src = `./images/${playerChoice.toLowerCase()}.png`;
  computerIcon.src = `./images/${computerChoice.toLowerCase()}.png`;

  if (playerChoice === computerChoice) {
    roundResultEl.textContent = `It's a tie! Both chose ${playerChoice}`;
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    playerScore++;
    roundResultEl.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResultEl.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
  }

  updateScore();
  checkWinner();
}

function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    finalResultEl.textContent =
      playerScore > computerScore ? "You won the game!" : "Computer wins!";
    document
      .querySelectorAll(".choice")
      .forEach((btn) => (btn.disabled = true));
    resetButton.style.display = "block";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerIcon.src = "./images/soccer-player.png";
  computerIcon.src = "./images/lcd.png";
  roundResultEl.textContent = "Make your move!";
  finalResultEl.textContent = "";
  updateScore();
  document.querySelectorAll(".choice").forEach((btn) => (btn.disabled = false));
  resetButton.style.display = "none";
}

document.querySelectorAll(".choice").forEach((btn) =>
  btn.addEventListener("click", () => {
    const playerChoice = btn.getAttribute("data-choice");
    console.log(btn);
    playRound(playerChoice);
  })
);

resetButton.addEventListener("click", resetGame);
