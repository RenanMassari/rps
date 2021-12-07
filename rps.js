function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[(Math.floor(Math.random() *choices.length))]
}
let draws = 0
let wins = 0
let losses = 0


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draws += 1
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return wins += 1
        }
        else if (computerSelection === 'paper') {
            return losses += 1
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return wins += 1
        }
        else if (computerSelection === 'rock') {
            return losses += 1
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return wins += 1
        }
        else if (computerSelection === 'scissors') {
            return losses += 1
        }
    }
    
}

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let clear = document.querySelector('.clear')

let winsDisplay = document.querySelector('.wins')
let lossesDisplay = document.querySelector('.losses')

function displayContent() { 
    winsDisplay.textContent = `Wins = ${wins}`
    lossesDisplay.textContent = `Losses = ${losses}`
}


function checkIfWon() {
    if (losses == 5) {
        alert('You lost!')
        wins = 0
        losses = 0
        displayContent()
    }
    else if (wins == 5) {
        alert('You won!')
        wins = 0
        losses = 0
        displayContent()
    }    
}

rock.addEventListener('click', function() {
    playRound('rock', computerPlay())
    displayContent()
    checkIfWon()
})
paper.addEventListener('click', function() {
    playRound('paper', computerPlay())
    displayContent()
    checkIfWon()
})
scissors.addEventListener('click', function() {
    playRound('scissors', computerPlay())
    displayContent()
    checkIfWon()
})
clear.addEventListener('click', function() {
    wins = 0
    losses = 0
    displayContent()
})
