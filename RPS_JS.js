let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let bot_score = document.querySelector(".bot_score");
let restartBtn = document.querySelector(".restart-btn");

let bot = "";
let you_scored = 0;
let bot_scored = 0;
let rounds = 0;

const resetGame = () => {
  you_scored = 0;
  bot_scored = 0;
  rounds = 0;
  score.innerText = `Your Score : ${you_scored}`;
  bot_score.innerText = `Computer Score : ${bot_scored}`;
  result.innerText = "Make your move!";
  restartBtn.style.display = "none"; 
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;
};

const check=()=>
{
    if (rounds >= 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        if (you_scored > bot_scored) {
          result.innerText = `Boom! 💥 You outsmarted the computer! 🧠`;
          result.style.color = "seagreen";
          result.style.fontWeight = "bold";
          result.style.fontSize="1.5em";
        } else if (bot_scored > you_scored) {
          result.innerText = `Ouch! 😬 The computer takes this one. Try again!`;
          result.style.color = "crimson";
          result.style.fontWeight = "bold";
          result.style.fontSize="1.5em";
        } else {
          result.innerText = `It’s a draw! 🤝 Great minds think alike. 😄`;
          result.style.color = "green";
          result.style.fontWeight = "bold";
          result.style.fontSize="1.5em";
        }
        restartBtn.style.display = "block"; 
        return true;
      }

      return false;
};

rock.addEventListener("click", () => {
    rounds++;
  if(check())
  {
    return;
  }
  let choices = ["rock", "paper", "scissor"];
  let bot = choices[Math.floor(Math.random() * 3)];

  if (bot === "paper") {
    result.innerText = `Your Pick : Rock \nComputer Pick : ${bot} \nComputer Won Round ${rounds}`;
    result.style.color = "crimson";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
    bot_scored++;
  } 
  else if (bot === "scissor") {
    result.innerText = `Your Pick : Rock \nComputer Pick : ${bot} \nYou Won Round ${rounds}`;
    result.style.color = "seagreen";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
    you_scored++;
  } 
  else {
    result.innerText = `Your Pick : Rock \nComputer Pick : ${bot} \nRound ${rounds} Tied`;
    result.style.color = "steelblue";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
  }

  score.innerText = `Your Score : ${you_scored}`;
  bot_score.innerText = `Computer Score : ${bot_scored}`;
});

paper.addEventListener("click", () => {
    rounds++;
    if(check())
    {
        return;
    }

  
  let choices = ["rock", "paper", "scissor"];
  let bot = choices[Math.floor(Math.random() * 3)];

  if (bot === "scissor") {
    result.innerText = `Your Pick : Paper \nComputer Pick : ${bot} \nComputer Won Round ${rounds}`;
    result.style.color = "crimson";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
    bot_scored++;
  } 
  else if (bot === "rock") {
    result.innerText = `Your Pick : Paper \nComputer Pick : ${bot} \nYou Won Round ${rounds}`;
    result.style.color = "seagreen";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
    you_scored++;
  } 
  else {
    result.innerText = `Your Pick : Paper \nComputer Pick : ${bot} \nRound ${rounds} Tied`;
    result.style.color = "steelblue";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
  }

  score.innerText = `Your Score : ${you_scored}`;
  bot_score.innerText = `Computer Score : ${bot_scored}`;
});

scissor.addEventListener("click", () => {
    rounds++;
    if(check())
    {
        return;
    }

  
  let choices = ["rock", "paper", "scissor"];
  let bot = choices[Math.floor(Math.random() * 3)];

  if (bot === "rock") {
    result.innerText = `Your Pick : Scissor \nComputer Pick : ${bot} \nComputer Won Round ${rounds}`;
    result.style.color = "crimson";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
    bot_scored++;
  } 
  else if (bot === "paper") {
    result.innerText = `Your Pick : Scissor \nComputer Pick : ${bot} \nYou Won Round ${rounds}`;
    result.style.color = "seagreen";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
    you_scored++;
  } 
  else {
    result.innerText = `Your Pick : Scissor \nComputer Pick : ${bot} \nRound ${rounds} Tied`;
    result.style.color = "steelblue";
    result.style.fontWeight = "bold";
    result.style.fontSize="1.2em";
  }

  score.innerText = `Your Score : ${you_scored}`;
  bot_score.innerText = `Computer Score : ${bot_scored}`;
});


restartBtn.addEventListener("click", resetGame);
