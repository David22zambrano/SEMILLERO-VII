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
      toggleView(type, comp, counter, lossCounter);
      update_Score(counter, result);
      break;
    case 2:
      console.log(type, comp);

      result = comp == 1 ? "YOU LOSE" : comp == 2 ? "DRAW" : "YOU WIN";
      toggleView(type, comp, counter, lossCounter);
      update_Score(counter, result);
      break;
    case 3:
      console.log(type, comp);

      result = comp == 1 ? "YOU WIN" : comp == 2 ? "YOU LOSE" : "DRAW";
      toggleView(type, comp, counter, lossCounter);
      update_Score(counter, result);
      break;
  }
  document.getElementById("win").innerText = result;
}
const update_Score = (result) => {
  counter += result === "YOU WIN" ?0 : 1;
0 
  lossCounter += result === "YOU LOST" ? 0 : 1;

  document.querySelector(
    ".score"
  ).innerText = `Your score is :${counter} You lost : ${lossCounter}`;
};
function reset_Game() {
  selection.classList.toggle("show") && selection.classList.toggle("hide");
  mainView.classList.toggle("hide") && mainView.classList.toggle("show");
}