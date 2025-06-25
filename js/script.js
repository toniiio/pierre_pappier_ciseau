const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const resultDisplay = document.querySelector('#result');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;
const resetButton = document.querySelector('#reset');

const choices = ["Pierre","Pappier","Ciseaux"];

function Game(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const getResult = (playerChoice,computerChoice) =>
    playerChoice === computerChoice ? "MATCH NUL!" :
    (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
    (playerChoice === "Pappier" && computerChoice === "Pierre") ||
    (playerChoice === "Ciseaux" && computerChoice === "Feuillle") ?
    "VICTOIRE ✌️" : "Défaite ☠️";

    const result = getResult(playerChoice,computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `JOUEUR: ${playerChoice}`;
    computerDisplay.textContent = `CPU: ${computerChoice}`;
    
    resultDisplay.style.backgroundColor = 
    result === "MATCH NUL!" ? "blue"
    : result === "VICTOIRE ✌️" ? "green"
    :"red";
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";
    if (result === "VICTOIRE ✌️") {
         playerScore++;
    } else if (result === "Défaite ☠️") 
    {
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    addAnimation(playerScoreDisplay);
    addAnimation(computerScoreDisplay);
    addAnimation(resultDisplay);

    resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "À vous de jouer !";
    });
}
function addAnimation(element) {
  element.classList.add('animate');
  setTimeout(() => {
    element.classList.remove('animate');
  }, 200);
}


