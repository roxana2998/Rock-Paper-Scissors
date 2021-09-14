const showWinner = document.querySelector(".show-winner");
const showPlayerScore = document.querySelector(".player-score");
const showComputerScore = document.querySelector(".computer-score");
const allPara = [...document.querySelectorAll("p")];

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add('play_again-file');
    const playAgainTitle = document.createElement("h2");
    playAgainTitle.classList.add('play_again-title');
    playAgainTitle.textContent = "Do you want to play again?";
    
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add('play_again-button');
    playAgainButton.textContent = "Yes";
    
    const stopPlayButton = document.createElement("button");
    stopPlayButton.classList.add('stop_play-button');
    stopPlayButton.textContent = "No";
    
    div.appendChild(playAgainTitle);
    div.appendChild(playAgainButton);
    div.appendChild(stopPlayButton);




let computerScore = 0;
let playerScore = 0;

function checkScore() {
  if (playerScore === 5) {
    showWinner.textContent = "You are the winner!";
    body.appendChild(div);
  } else if (computerScore === 5) {
    showWinner.textContent = "The computer is the winner!";
    body.appendChild(div);
  }

}

function computerPlay() {
  let computerNumber = Math.floor(Math.random() * 3);
  if (computerNumber === 0) {
    return "rock";
  } else if (computerNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function roundEnd(winner) {
  if (winner === "player") {
    playerScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
  showPlayerScore.textContent = `Your score is ${playerScore}.`;
  showComputerScore.textContent = `Computer's score is ${computerScore}.`;
  checkScore();
}

function playRound(playerChoice) {
  let computerChoice = computerPlay();
  console.log(computerChoice + " :computer");
  console.log(playerChoice + " :player");

  if (playerChoice === "rock" && computerChoice === "paper") {
    roundEnd("computer");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    roundEnd("computer");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    roundEnd("computer");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    roundEnd("player");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    roundEnd("player");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    roundEnd("player");
  } else {
    console.log(computerScore);
    console.log(playerScore);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let playerChoice = button.textContent.toLowerCase();
    playRound(playerChoice);
  });
});

function playAgain() {
  for (el of allPara) {
    el.textContent = "";
  }
  body.removeChild(div);

}
