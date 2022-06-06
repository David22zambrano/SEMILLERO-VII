
const fecha = document.getElementById('fecha');
const inputs = document.querySelectorAll('input');
const image = document.getElementById('btn');



image.addEventListener('click',()=>{
    image.classList.toggle('btn-act');
})

let arrayInputs = Array.from(inputs);
arrayInputs.forEach((input) => {
    input.addEventListener("click", validaInput);
  });

fecha.textContent =  new Date(Date.now()).toISOString();