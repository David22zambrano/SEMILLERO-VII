const expReg = {
    name: /^[a-zA-Z0-9\_\-]{4,16}$/
}

const addItems = document.querySelector('#button_add_new');
const buttons_navegation = document.querySelectorAll('button');



buttons_navegation.addEventListener("click", () => {
    buttons_navegation.classList.toggle("btn-act");
  });



