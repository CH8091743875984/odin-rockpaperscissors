function getComputerChoice(choices = ["Rock", "Paper", "Scissors"]) {
    return choices[Math.floor(choices.length * Math.random())]
}

function playRound(playerSelection, computerSelection) {
    let computerSelectionFormatted = computerSelection.toLowerCase()
    let playerSelectionFormatted = playerSelection.toLowerCase()
    console.log("Player: "+playerSelection+", Computer: "+computerSelection)
    if (playerSelectionFormatted === computerSelectionFormatted) {
        return "Tie"
    } else if ((playerSelectionFormatted === "rock" && computerSelectionFormatted === "scissors") || (playerSelectionFormatted === "scissors" && computerSelectionFormatted === "paper") || (playerSelectionFormatted === "paper" && computerSelectionFormatted === "rock")) {
        return "Player Wins"
    } else {
        return "Computer Wins"
    }
}

function game() {
    
    let playerScore = 0
    let computerScore = 0
    
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