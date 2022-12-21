const CHOICES = ["rock", "paper", "scissors"]
let computerSelection = ""
let playerSelection = ""
let playerDisplay = document.getElementById("playerScore")
let computerDisplay = document.getElementById("computerScore")
let outcomeDisplay = document.getElementById("outcome")
let computerWins = 0
let playerWins = 0
let maxWins = 0

function getComputerSelection() {
    computerSelection = CHOICES[Math.floor(Math.random()*CHOICES.length)]
    console.log(computerSelection)
    return computerSelection
}

function resetGame() {
    computerWins = 0
    playerWins = 0
    document.getElementById('playerScore').textContent = "Playerscore = 0"
    document.getElementById('computerScore').textContent = "Computerscore = 0"
}

function updateDisplay(){
    playerDisplay.textContent = `Playerscore = ${playerWins}`
    computerDisplay.textContent = `Computerscore =  ${computerWins}`
}

function rock(){
    let computerChoice = getComputerSelection();
    if (computerChoice === "scissors") {
        outcomeDisplay.textContent = "You won!";
        outcomeDisplay.style.backgroundColor = 'green' 
        playerWins++;
    } else if (computerChoice === "rock") {
        outcomeDisplay.textContent = "It's a draw!";
        outcomeDisplay.style.backgroundColor = 'grey' 
    } else {
        outcomeDisplay.textContent = "You lost!";
        outcomeDisplay.style.backgroundColor = 'red' 
        computerWins++
    }
    updateDisplay()
}

function paper(){
    let computerChoice = getComputerSelection();
    if (computerChoice === "scissors") {
        outcomeDisplay.textContent = "You lost!";
        outcomeDisplay.style.backgroundColor = 'red' 
        computerWins++;
    } else if (computerChoice === "paper") {
        outcomeDisplay.textContent = "It's a draw!";
        outcomeDisplay.style.backgroundColor = 'grey' 
    } else {
        outcomeDisplay.textContent = "You won!";
        outcomeDisplay.style.backgroundColor = 'green' 
        playerWins++
    }
    updateDisplay()
}

function scissor(){
    let computerChoice = getComputerSelection();
    if (computerChoice === "paper") {
        outcomeDisplay.textContent = "You lost!";
        outcomeDisplay.style.backgroundColor = 'red' 
        computerWins++;
    } else if (computerChoice === "scissors") {
        outcomeDisplay.textContent = "It's a draw!";
        outcomeDisplay.style.backgroundColor = 'grey' 
    } else {
        outcomeDisplay.textContent = "You won!";
        outcomeDisplay.style.backgroundColor = 'green' 
        playerWins++
    }
    updateDisplay()
}