const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const userScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const resulst_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    console.log(math.random());
}
getComputerChoice();

function game (userChoice) {

}

function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();