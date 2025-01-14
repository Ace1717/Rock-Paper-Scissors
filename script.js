const playerDisplayScore= document.querySelector("#player-score")
const cpuDisplayScore = document.querySelector("#cpu-score")
const tieDisplayScore = document.querySelector("#tie-score")
const results = document.querySelector("#result")
let playerScore = 0
let cpuScore = 0
let tieScore = 0




function getComputerChoice() {
  let options= ["rock", "paper", "scissors"]
   return options [Math.floor(Math.random() * 3)]
}

// 
function playRound(playerSelection, computerSelection){
 
  if(playerSelection === computerSelection) {
    tieScore++
    results.textContent = `You tie. both chose ${playerSelection}`
  
  } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors"  ||
    playerSelection === "scissors" && computerSelection === "rock"){
      cpuScore++
      results.textContent = `You lose. You chose ${playerSelection}. Cpu chose ${computerSelection}`

  } else {
    playerScore++
    results.textContent = `You win. You chose ${playerSelection}. Cpu chose ${computerSelection}`
  }

  finalScore()

    playerDisplayScore.textContent = playerScore
    cpuDisplayScore.textContent = cpuScore
    tieDisplayScore.textContent = tieScore


}

function resetScore () {
  playerScore = 0
  cpuScore = 0
  tieScore = 0
}


function finalScore () {

  if(playerScore === 5){
    resetScore()
    results.textContent = "You win the game"
 
  } else if(cpuScore === 5){
    resetScore()
    results.textContent = "The cpu win the game"
  }
}




const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
button.addEventListener('click', () =>{
 let playerSelection = button.id
 let computerSelection = getComputerChoice()
 playRound(playerSelection, computerSelection)
  })
})