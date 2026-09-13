function getComputerChoice(){
  const numChoice = Math.floor(Math.random() * 3); 
  return valueTostring(numChoice);
}

function valueTostring(value){
    switch (value) {
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice){
    if (round > 5) {
        alert("Game Over!")
    }

    else { 
        const computerChoice = getComputerChoice();
        var humanOutcome = 0;
        var computerOutcome = 0;

        switch (humanChoice){
            case "paper":
                if (computerChoice === "rock") {
                    computerOutcome += 1;
                }
                else if (computerChoice === "scissors") {
                    humanOutcome += 1;
                }
            case "rock":
                if (computerChoice === "paper") {
                    computerOutcome += 1;
                }
                else if (computerChoice === "scissors") {
                    humanOutcome += 1;
                }
            case "scissors": 
                if (computerChoice === "rock") {
                    computerOutcome += 1;
                }
                else if (computerChoice === "paper") {
                    humanOutcome += 1;
                }
        }

        var outcomeStatement = "";

        if (humanOutcome === 0 && computerOutcome === 0) {
            outcomeStatement = "Tied! Both picked " + humanChoice;
        }
        else if (humanOutcome === 1) {
            outcomeStatement = "You won: " + humanChoice + " beats " + computerChoice + ".";
            humanScore += 1;
        }
        else { 
            outcomeStatement = "You lost: " + computerChoice + " beats " + humanChoice + ".";
            computerScore += 1;
        }

        alert(outcomeStatement);
        round += 1;
        humanDisplayScore.textContent = humanScore;
        computerDisplayScore.textContent = computerScore;
    }
}

var round = 1; 
var humanScore = 0;
var computerScore = 0;

const humanDisplayScore = document.querySelector(".score-human");
const computerDisplayScore = document.querySelector(".score-computer");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "rock") {
            playRound("rock");
        }
        else if (button.id === "paper") {
            playRound("paper");
               
        }
        else if (button.id === "scissors") {
            playRound("scissors");
        }
    });
});