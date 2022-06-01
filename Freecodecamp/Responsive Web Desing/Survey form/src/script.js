const expReg = {
  name: /^[A-Z][a-zA-z ]{1,29}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const inputs = document.getElementsByTagName("input");
let arrayInputs = Array.from(inputs);
arrayInputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
});
function validateForm({ target }) {
  expReg[`${target.name}`].test(target.value)
    ? (target.style.border = "2px solid green")
    : (target.style.border = "2px solid red");
}
