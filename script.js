function getComputerChoice() {
    let x = Math.random() * 3;
    switch (x) {
        case x<=1:
            return "rock";
        case x<=2:
            return "paper"; 
        case x<=3:
            return "scissors";
    }
}
function getHumanChoice() {
    let r = window.prompt("enter rock, paper, or scissors");
    return r;
}
let humanScore = 0;
let computerScore = 0;
function playRound(hChoice, cChoice) {
    let h = hChoice.toLowerCase();
    if (h == "rock" || h == "paper" || cChoice == "rock" || cChoice == "paper") {
        if (h == "paper") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
    } else if (h == "scissors" || h == "paper" || cChoice == "scissors" || cChoice == "paper") {
        if (h == "scissors") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        } else {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    } else if (h == "scissors" || h == "rock" || cChoice == "scissors" || cChoice == "rock") {
        if (h == "rock") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
    }
}


function playGame() {
    for (i=0; i<5; i++) {
        let hs = getHumanChoice();
        let cs = getComputerChoice();
        playRound(hs, cs);
    }

}
playGame();