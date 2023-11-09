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