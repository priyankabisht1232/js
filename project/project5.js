let  userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice =() =>{
    const options = ["rock", "paper", "scissors"];
 const randIdx =  Math.floor(Math.random()*3);
 return options[randIdx];
    //rock , paper, scissors
};
const drawGame = () =>{
   
    msg.innerText ="Game was Draw. play Again.";
     msg.style.backgroundColor ="#081b31";
};

const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText =userscore;

        console.log("You win !");
        msg.innerText =`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
       
        msg.innerText =`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame =(userChoice)=>{
console.log("user choice =", userChoice);
//generate computer choice ->modular
const compChoice = genComputerChoice();
console.log("computer choice =" ,compChoice);

if(userChoice === compChoice){
 drawGame();
} else {
    let userWin = true;
    if(userChoice ==="rock"){

        //scissors, paper
    userWin = compChoice ==="paper" ? false : true;
    }
    else if(userChoice==="paper"){
        //rock , scissors
   userWin = compChoice ==="scissors" ? false : true;
    }
    else{
        //rock, scissors
      userWin = compChoice ==="rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);

}
};

choices.forEach((choice) =>{
    // console.log(choice);/
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playGame(userChoice);

    });
});