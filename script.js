const showPlayerScore = document.querySelector(".player-score");
const showComputerScore = document.querySelector(".computer-score");
const allPara = [...document.querySelectorAll("p")];



const body = document.querySelector("body");

const gameImage = document.createElement('img');
gameImage.className = 'game-image';
gameImage.src = "./game-Image.png";


const playDiv = document.createElement("div");
playDiv.className = 'start-game';
    const gameTitle = document.createElement("h1");
    gameTitle.textContent = "Welcome to Rock Paper Scissors game!";
    const playButton = document.createElement("button");
    playButton.className = 'play-button';
    playButton.textContent = "Play";
    playDiv.appendChild(gameTitle);
    playDiv.appendChild(playButton);
    playDiv.appendChild(gameImage);
body.appendChild(playDiv);


const main = document.querySelector("main");
const icons = document.querySelector(".icons");

const div = document.createElement("div");
div.classList.add('play_again-file');
    const showWinner = document.createElement("h2");
    showWinner.classList.add('show-winner');
    
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add('play_again-button');
    playAgainButton.textContent = "Play again";
    

const backdrop = document.createElement("div");
backdrop.className = 'backdrop';

const optionTitle = document.createElement("p");
optionTitle.className = 'option-title';
optionTitle.textContent = "Hey, please choose one of the above options to start the game!";
main.appendChild(optionTitle);
const thumbsUpIcon = document.createElement("img");
thumbsUpIcon.className = 'thumbsUp-icon';
thumbsUpIcon.src = "./thumbs-up.png";
main.appendChild(thumbsUpIcon);


const showRoundWinner = document.querySelector(".show_round-winner");
const showPlayerIcon = document.querySelector(".player-icon");
const showComputerIcon = document.querySelector(".computer-icon");



let computerScore = 0;
let playerScore = 0;

function checkScore() {
  if (playerScore === 5) {
    showWinner.textContent = "You have 5 points. You are the winner!";
    div.appendChild(showWinner);
    div.appendChild(playAgainButton);
    body.appendChild(backdrop);
    body.appendChild(div);
    playAgain();
    setTimeout(() => {div.style.transform = "translateY(3rem)"}, 1);
    
   

  } else if (computerScore === 5) {
    showWinner.textContent = "The computer has 5 points. The computer is the winner!";
    div.appendChild(showWinner);
    div.appendChild(playAgainButton);
    body.appendChild(backdrop);
    body.appendChild(div);

    playAgain();
    setTimeout(() => {div.style.transform = "translateY(3rem)"}, 1);

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

function roundEnd(winner, pc, cc) {
  if (winner === "player") {
    playerScore += 1;
    showRoundWinner.textContent = `${pc[0].toUpperCase() + pc.slice(1)} beats ${cc}. You won this round!`;
    showPlayerIcon.src = `./${pc}.png`;
    showComputerIcon.src = `./${cc}.png`;
  } else if (winner === "computer") {
    computerScore += 1;
    showRoundWinner.textContent = `${cc[0].toUpperCase() + cc.slice(1)} beats ${pc}. The computer won this round!`;
    showPlayerIcon.src = `./${pc}.png`;
    showComputerIcon.src = `./${cc}.png`;
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
    roundEnd("computer", playerChoice, computerChoice);
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    roundEnd("computer", playerChoice, computerChoice);
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    roundEnd("computer", playerChoice, computerChoice);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    roundEnd("player", playerChoice, computerChoice);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    roundEnd("player", playerChoice, computerChoice);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    roundEnd("player", playerChoice, computerChoice);
  } else if (playerChoice === computerChoice) {
    showRoundWinner.textContent = `You both chose ${playerChoice}. It's a draw!`;
    showPlayerIcon.src = `./${playerChoice}.png`;
    showComputerIcon.src = `./${computerChoice}.png`;
  }
 
}

playButton.addEventListener("click", function() {
  playDiv.style.display = "none";
  main.style.display = "block";
})

const buttons = document.querySelectorAll("main button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let playerChoice = button.textContent.toLowerCase();
    playRound(playerChoice);
    icons.style.display = "flex";
    optionTitle.style.display = "none";
    thumbsUpIcon.style.display = "none";

  });
});



function playAgain() {
  playAgainButton.addEventListener("click", function() {
    body.removeChild(div);
    body.removeChild(backdrop);
    computerScore = 0;
    playerScore = 0;
    for (el of allPara) {
      el.textContent = "";
    }    
    icons.style.display = "none";
    optionTitle.style.display = "block";
    thumbsUpIcon.style.display = "block";
  });
}

