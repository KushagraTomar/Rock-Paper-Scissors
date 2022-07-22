const computer = document.getElementById('computer-choice')
const player = document.getElementById('player-choice')
const result = document.getElementById('result')
const choice = document.querySelectorAll('button')

let selectedChoice
let computerChoice
choice.forEach(choice => choice.addEventListener('click', (e) => {
    selectedChoice = e.target.id
    player.innerHTML = selectedChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1
    if (number==1) {
        computerChoice = 'rock'
    } else if (number==2) {
        computerChoice = 'scissors'
    } else {
        computerChoice = 'paper'
    }

    computer.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice == selectedChoice) {
        result.innerHTML = 'its a draw'
    }
    if (computerChoice == 'rock' && selectedChoice == 'paper') {
        result.innerHTML = 'you win!'
    }
    if (computerChoice == 'rock' && selectedChoice == 'scissors') {
        result.innerHTML = 'you lost!'
    }
    if (computerChoice == 'paper' && selectedChoice == 'scissors') {
        result.innerHTML = 'you win!'
    }
    if (computerChoice == 'paper' && selectedChoice == 'rock') {
        result.innerHTML = 'you lost!'
    }
    if (computerChoice == 'scissors' && selectedChoice == 'rock') {
        result.innerHTML = 'you win!'
    }
    if (computerChoice == 'scissors' && selectedChoice == 'paper') {
        result.innerHTML = 'you lost!'
    }
}