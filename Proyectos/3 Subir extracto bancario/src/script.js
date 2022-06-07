const fecha = document.getElementById("fecha");
const inputs = document.querySelectorAll("input");
const image = document.getElementById("btn");
const currencySelect = document.getElementById("currencySelect");

image.addEventListener("click", () => {
  image.classList.toggle("btn-act");
});

let today = new Date();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();
let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());
let current_date = `${month}/${date}/${year}:${hours}:${minutes}:${seconds}`;
fecha.innerText = current_date;
function addZero(num) {
  return num < 10 ? `0${num}` : num;
}
fetch("./data/playData.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(Array.from(data));
    Object.keys(data).forEach((currency) => {
      let option = document.createElement("option");
      option.innerText = currency;
      currencySelect.append(option);
    });
  });
