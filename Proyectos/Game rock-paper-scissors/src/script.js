const buttons = document.getElementById("circle");
const rules = document.getElementById("btn_rules");
const modal = document.getElementById("modal");
const btn_Close = document.getElementById("close_btn");
const mainView = document.querySelector(".container");
const selection = document.querySelector(".selection");
const text_Result = document.getElementById("win");
const reset = document.getElementById("reset");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const left = document.getElementById("left");
const right= document.getElementById("right");

let counter = 0;
let lossCounter = 0;
let result = "";

function getRndInteger() {
  const max = 3;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const close_rules = (e) => (modal.style.display = "none");
const display_rules = (e) => (modal.style.display = "flex");

const toggleView = (type, comp, counter) => {
  console.log(type, comp, counter);

  mainView.classList.toggle("hide") && selection.classList.toggle("show");
  player.src = `./images/choice-${type}.svg`;
  computer.src = `./images/choice-${comp}.svg`;
  
  console.log(type, comp);
};

function star_Game(type) {
  console.log(type, "start game executed");
  const comp = getRndInteger();

  console.log("la computadora escogio" + comp);
  switch (type) {
    case 1:
      console.log(type, comp);
      result = comp == 1 ? "DRAW" : comp == 2 ? "YOU WIN" : "YOU LOST";
      result === "YOU WIN" ? counter += 1 : counter -=1;
      result === "YOU LOSE" ? counter -= 1 : counter += 1;
      toggleView(type, comp, counter);
      left.style.border = "24px solid #dd3654";
      right.style.border = "24px solid #dd3654";
      
      update_Score(counter, result);
      break;
    case 2:
      console.log(type, comp);
      result = comp == 1 ? "YOU LOSE" : comp == 2 ? "DRAW" : "YOU WIN";
      counter += result === "YOU WIN" ? 1 : 0;
      counter += result === "YOU LOSE" ? -1 : 0;
      left.style.border = "24px solid #dd3654";
      right.style.border = "24px solid #dd3654" ;
      toggleView(type, comp, counter);
      update_Score(counter, result);
      break;
    case 3:
      console.log(type, comp);
  
      counter += result === "YOU WIN" ? 1 : 0;
      counter -= result === "YOU LOSE" ? -1 : 0;
      left.style.border = "24px solid #dd3654";
      right.style.border = "24px solid #dd3654";
      update_Score(counter, result);
      toggleView(type, comp, counter);
      
      break;
  }
  document.getElementById("win").innerText = result;
}
const update_Score = (result) => {
  document.querySelector(".score").innerText = `${counter} `;
};
function reset_Game() {
  selection.classList.toggle("show") && selection.classList.toggle("hide");
  mainView.classList.toggle("hide") && mainView.classList.toggle("show");
}
/*Your score is : You lost : ${lossCounter}  */