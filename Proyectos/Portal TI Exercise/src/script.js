const expReg = {
  name: /^[a-zA-Z0-9\_\-]{4,16}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const inputs = document.getElementsByTagName("input");
let arrayInputs = Array.from(inputs);
arrayInputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
});
function validateForm({ target }) {
  expReg[`${target.name}`].test(target.value)
    ? target.style.border = "2px solid green"
    : target.style.border = "2px solid red"
}
  