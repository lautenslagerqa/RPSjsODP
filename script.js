function getComputerChoice() {
    let x =  Math.floor(Math.random() * 3) + 1;
    switch (x) {
        case 1:
            return "rock";
        case 2:
            return "paper"; 
        case 3:
            return "scissors";
    }
}
function getHumanChoice() {
    let r = window.prompt("enter rock, paper, or scissors");
    return r;
}
let humanScore = 0;
let computerScore = 0;
let rBar = document.querySelector(".result");
function playRound(hChoice, cChoice) {
    let h = hChoice.toLowerCase();
    //console.log("result " + h + " " + cChoice);
    if ((h == "rock" || h == "paper") && (cChoice == "rock" || cChoice == "paper")) {
        if (h == "paper" && cChoice=="rock") {
            rBar.textContent = "Result: You win! Paper beats Rock.";
            humanScore++;
        } else if (h=="rock" && cChoice=="paper") {
            rBar.textContent = "Result: You lose! Paper beats Rock.";
            computerScore++;
        } else {
            rBar.textContent = "Result: Draw!"
        }
    } else if ((h == "scissors" || h == "paper") && (cChoice == "scissors" || cChoice == "paper")) {
        if (h == "scissors" && cChoice == "paper") {
            rBar.textContent = "Result: You win! Scissors beats Paper.";
            humanScore++;
        } else if (h=="paper" && cChoice== "scissors") {
            rBar.textContent = "Result: You lose! Scissors beats Paper.";
            computerScore++;
        } else {
            rBar.textContent = "Result: Draw!"
        }
    } else if (h == "scissors" || h == "rock" || cChoice == "scissors" || cChoice == "rock") {
        if (h == "rock" && cChoice== "scissors") {
            rBar.textContent = "Result: You win! Rock beats Scissors.";
            humanScore++;
        } else if (h == "scissors" && cChoice== "rock") {
            rBar.textContent = "Result: You lose! Rock beats Scissors.";
            computerScore++;
        } else {
            rBar.textContent = "Result: Draw!"
        }
    } else {
        rBar.textContent = "Result: Draw!"
    }
    let sBar = document.querySelector(".score");
    sBar.textContent = "Score: You: " + humanScore + " Computer: " + computerScore;
}

let btn = document.querySelectorAll("button");
let text = "";
let clicked = false;
btn.forEach((butn) => {
    butn.addEventListener("click", () => {
        clicked = true;
        text = (butn.textContent).toLowerCase();
        playGame();
        //console.log(text);
        clicked = false;
    });
});
function playGame() {   
            let hs = text;
            let cs = getComputerChoice();
            playRound(hs, cs);
            //console.log(hs + " " + cs);
        
    }
