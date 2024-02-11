let userScore = 0;
let computerScore = 0;
 const choises = document.querySelectorAll(".circle");
 const message = document.querySelector("#message");
 const userScorePara = document.querySelector("#user-score");
 const computerScorePara = document.querySelector("#computer-score");

const genComputerChoise = () => {
    let options = ["rock", "paper", "scissor"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
};

const drawGame = () => {
    // console.log("GAME WAS DRAW . PLAY AGAIN");
    message.innerText = "GAME WAS DRAW . PLAY AGAIN";
    message.style.backgroundColor = "black";
};

 const playGame = (userChoise) => {
    console.log("user choise = ", userChoise);
    // generate computer choise
    const compChoise = genComputerChoise();
    console.log(" computer choise = ", compChoise);

    if (userChoise === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoise === "rock") {
            // scissors // papers
            userWin = compChoise === "paper" ? false : true ;
        } else if (userChoise === "paper") {
            // rock // scissor
            userWin = compChoise === "scissor" ? false : true;
        } else {
            // rock // paper 
            userWin = compChoise === "rock" ? false : true ;
        }
        showWinner(userWin, userChoise, compChoise);
    }
 };

 choises.forEach((circle) => {
    console.log(circle);
    circle.addEventListener("click", () => {
        const userChoise = circle.getAttribute("id")
        console.log("choise was clicked",userChoise);
        playGame(userChoise);
    });
 });

 const showWinner = (userWin,userChoise,compChoise) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("YOU WIN");
        message.innerText = `YOU WIN your ${userChoise} beats ${compChoise}` ;
        message.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        // console.log("YOU LOSE");
        message.innerText = `YOU LOSE ${compChoise} beats your ${userChoise}` ;
        message.style.backgroundColor = "red";
    }
}
