
const button = document.querySelector('button');
const body = document.querySelector('body');
const colorTarjets = document.querySelectorAll('articule');

button.addEventListener('click', () => {
    body.classList.toggle('dark-theme')

    for(i=0; i<colorTarjets.length; i++){
        colorTarjets[1].classList.toggle('dark-theme')
    }
})
