function getComputerChoice(choices = ["Rock", "Paper", "Scissors"]) {
    return choices[Math.floor(choices.length * Math.random())]
}

function playRound(playerSelection, computerSelection=getComputerChoice()) {
    let computerSelectionFormatted = computerSelection.toLowerCase()
    let playerSelectionFormatted = playerSelection.toLowerCase()
    console.log("Player: "+playerSelection+", Computer: "+computerSelection)
    
    let scoreBoard = document.querySelector('#score')
    scoreBoard.textContent = "Player Score: "+playerScore+
    " Computer Score: "+computerScore
    
    if (playerSelectionFormatted === computerSelectionFormatted) {
        return "Tie"
    } else if ((playerSelectionFormatted === "rock" && computerSelectionFormatted === "scissors") || (playerSelectionFormatted === "scissors" && computerSelectionFormatted === "paper") || (playerSelectionFormatted === "paper" && computerSelectionFormatted === "rock")) {
        playerScore++
    } else {
        computerScore++
    }

    
    if (playerScore<5 && computerScore<5)
    {scoreBoard.textContent = "Player Score: "+playerScore+
        " Computer Score: "+computerScore}
    else if (playerScore === 5) {
        scoreBoard.textContent = "Player Wins!"
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        scoreBoard.textContent = "Computer Wins!"
        playerScore = 0
        computerScore = 0
    } else {
        scoreBoard.textContent = "Error"
    }

}   

function game() {

    
    for (let round=1; round<=5; round++) {
        let userInput = prompt("Rock, Paper, or Scissors?")
        let gameResult = playRound(userInput, getComputerChoice())
        if (gameResult === "Player Wins") {
            playerScore++
            console.log("Player score increased")
        } else if (gameResult === "Computer Wins") {
            computerScore++
            console.log("Computer score increased")
        }
        /*console.log(gameResult+" round "+round+"! Score is Player: "+playerScore+" Computer: "+computerScore)*/
    }
    console.log("Final Score: Player: "+playerScore+" Computer: "+computerScore)
    
}

let rockBtn = document.querySelector('#rock')
let paperBtn = document.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')

let buttonSelection = function (button) {
    buttonText = button.textContent
    return buttonText
}

rockBtn.addEventListener('click', function() {
    playRound(buttonSelection(rockBtn))
})

paperBtn.addEventListener('click', function() {
    playRound(buttonSelection(paperBtn))
})

scissorsBtn.addEventListener('click', function() {
    playRound(buttonSelection(scissorsBtn))
})

let playerScore = 0
let computerScore = 0