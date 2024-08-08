//starting scores
let userScore = 0;
let compScore = 0;

//access elements from html
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreParagraph = document.querySelector("#user-score");
const compScoreParagraph = document.querySelector("#comp-score");

//generate computer's choices
const generateCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//function for draw game
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "rgb(108, 27, 51)";
};

//function to show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    //updating user's score
    userScore++;
    userScoreParagraph.innerText = userScore;
    //displayinying message on user's win
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    //updating computer's score
    compScore++;
    compScoreParagraph.innerText = compScore;
    //displaying msg on computer's win
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
//function for playing game
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //computer randomly generates a choice
  const compChoice = generateCompChoice();
  console.log("computer's choice = ", compChoice);

  //condition (incase both use same options)
  if (userChoice === compChoice) {
    //call function of Draw Game
    drawGame();
  } else {
    let userWin = true;
    //conditions to check who would win in these scenarios
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//tracking User's choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
