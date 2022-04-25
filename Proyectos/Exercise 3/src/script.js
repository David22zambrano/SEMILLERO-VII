let nameContainer = document.getElementById("names");
let rContainer = document.getElementById("role");
let pContainer = document.getElementById("photo");
let qContainer = document.getElementById("quote");
let buttons = Array.from(document.getElementsByTagName("button"));
let counter = 0;
import people from '../data/people.js'


 const swapInformation = btn => {
  counter >= people.length - 1 && btn.id == "next"
    ? (counter = 0)
    : counter <= 0 && btn.id == "prev"
    ? (counter = people.length - 1)
    : btn.id == "prev"
    ? counter--
    : counter++;
  showInformation(counter);
}

function showInformation(counter) {
  const { name, role, photo, quote } = people[counter];
  nameContainer.innerText = name;
  rContainer.innerText = role;
  pContainer.src = photo;
  qContainer.innerText = quote;
  console.log("show Info ejecutada");
}
 window.addEventListener("load", () =>{
  showInformation(0)
 })
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    swapInformation(button);
  });
});
