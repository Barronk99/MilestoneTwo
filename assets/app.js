let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const userScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const resulst_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    console.log(math.floor(math.random() x 3));
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    resulst_p.innerHTML = userChoice + "beats" + computerChoice + "You win!";
}

function lose() {
    console.log("LOSE");
}

function draw() {
    console.log("DRAW");
}

function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
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