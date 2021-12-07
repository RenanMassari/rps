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

function game() {
    for (let i = 0; i <5; i++) {
        let computerSelection = computerPlay()
        let playerSelectionBrute = prompt('Choose rock, paper, or scissors')
        let playerSelection = playerSelectionBrute.toLowerCase()
        playRound(playerSelection, computerSelection)
        console.log(`Wins = ${wins}, Losses = ${losses}, Draws = ${draws}`)
    }
    if (wins>losses) {
        console.log('You win')
    }
    else {
        console.log('Computer overlord wins!')
    }
}