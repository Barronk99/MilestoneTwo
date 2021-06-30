const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const userScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const resulst_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function main() {

rock_div.addEventListener('click', function() {
    console.log("Great! You clicked Rock");
})

paper_div.addEventListener('click', function() {
    console.log("Great! You clicked Paper");
})

scissors_div.addEventListener('click', function() {
    console.log("Great! You clicked Scissors");
})
}

main();