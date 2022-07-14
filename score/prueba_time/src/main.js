const temp = document.querySelector('#temporizador')
let segundos ;

const sectionCheks = document.getElementById('section_checks')
const sectionTempo = document.querySelector('.game')

let header = document.querySelector('header')
const h2 = document.querySelector('h2')

const correctBtn = document.getElementById('buttonCorrect')
const incorrectBtn = document.getElementById('buttonIncorrect')
const nextWordBtn = document.getElementById('buttonNextWord')


console.log(h2)

function checkValue()
{
    const timeChecks = [...document.querySelectorAll('.radio')]
    timeChecks.forEach(chek =>
    {
       chek.addEventListener('click',()=>
       {
        if( chek.setAttribute.checked = true &&  chek.classList.contains('oneMinute'))
            {
                sectionCheks.style.display="none"
                sectionTempo.style.display ="flex"
                segundos = chek.value;
                return segundos
            }
        else if( chek.setAttribute.checked = true &&  chek.classList.contains('thirtySecond'))
            {
                sectionCheks.style.display="none"
                sectionTempo.style.display ="flex"
                segundos = chek.value;
                return segundos
            }
        else if( chek.setAttribute.checked = true &&  chek.classList.contains('fiftenSecond'))
            {  
                sectionCheks.style.display="none"
                sectionTempo.style.display ="flex"
                segundos = chek.value;
                return segundos
            }    
        else 
            {
                console.log("nocas")
            }
       })
    })
}

const timer = setInterval(()=>
{

    segundos--;
    temp.innerHTML=`${segundos}`

    correctBtn.addEventListener('click',()=>
    {
        clearInterval(timer)
        h2.innerText = "respuesta correcta"
        nextWordBtn.style.display="flex"
        nextWordBtn.style.backgroundColor = "lime"
    })

    if(segundos < 10)
    {
        temp.innerText=`0${segundos}`
    }

    if(segundos == 0)
    {
        clearInterval(timer)
        h2.innerText= "punto incorrecto"
        correctBtn.style.display="none"
        incorrectBtn.style.display="flex"
        nextWordBtn.style.display="flex"
        nextWordBtn.style.backgroundColor="red"
    }
},1000);
checkValue()