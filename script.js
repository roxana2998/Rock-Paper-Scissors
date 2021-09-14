let startAction = prompt(
  "Hi! This is 'Rock, Paper, Scissors' game. Do you want to play?"
).toLowerCase();
let userInput;
let computerChoice;
let computerScore = 0;
let playerScore = 0;

function userValidation() {
  if (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  ) {
    userInput = prompt(
      "Please enter one of the following: Rock, Paper or Scissors."
    ).toLowerCase();
    userValidation();
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

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "You lose! Paper beats Rock.";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "You lose! Scissors beat Paper.";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "You lose! Rock beats Scissors.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore += 1;
    return "You win! Rock beats Scissors.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore += 1;
    return "You win! Paper beats Rock.";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore += 1;
    return "You win! Scissors beat Paper.";
  } else {
    return "It is a draw!";
  }
}

function playGame() {
  userInput = prompt(
    "Please enter your choice: Rock, Paper or Scissors."
  ).toLowerCase();

  userValidation();
  computerChoice = computerPlay();
  console.log(userInput);
  console.log(computerChoice);
  console.log(playRound(userInput, computerChoice));
  console.log(playerScore);
  console.log(computerScore);
}

function startPlay(play) {
  if (play === "yes") {
    playGame();
  } else {
    alert("We are sorry! This game has been cancelled!");
  }
}

startPlay(startAction);
playGame();
playGame();
playGame();
playGame();

if (playerScore > computerScore) {
  console.log("You are the winner!");
} else {
  console.log("The computer is the winner!");
}
